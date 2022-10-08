const {
  PASTEBIN_URL,
  buildRawSnippetPageUrl,
  buildSnippetPageUrl,
} = require("./const");
const { LoadDb, loadSessions, addItem, addSession, getSessions } = require("./dal");
const { http } = require("./http");
const {
  dumpSessions,
  dumpSnippetPage,
  dumpSnippetText,
  dumpIndexPage,
  dumpDb,
  readIndexPageSession
} = require("./dump");
const { parseIndexPage, parseSnippetPage } = require("./parse");
const { logger } = require("./logger");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");
const differenceInMinutes = require("date-fns/differenceInMinutes");
const formatDistance = require("date-fns/formatDistance");

async function scrapeSnippetPage(ts, id) {
  const res = await http(buildSnippetPageUrl(id), { id });
  await dumpSnippetPage(ts, id, res.data);

  const resRaw = await http(buildRawSnippetPageUrl(id), { id });
  await dumpSnippetText(ts, id, resRaw.data.toString());

  return parseSnippetPage(res.data, { ts, id });
}

/**
 * Check if last session occured in the last 2 min
 * if true, get last session & continue
 * else start a new session
 */
function getSession(thresholdMinutes = 2) {
  const sessions = getSessions();
  const now = Date.now();
  if (sessions.length > 0) {
    const lastSessionTS = sessions[0];
    logger.info(`Last Session was: ${formatDistanceToNow(lastSessionTS)}`);
    if (differenceInMinutes(now, lastSessionTS) <= thresholdMinutes) {
      logger.info(
        `Should retrive files from disk, last session was ${formatDistance(
          now,
          lastSessionTS
        )}`
      );
      return [lastSessionTS, true];
    }
  }

  return [Date.now(), false];
}

async function scrapeIndexPage(limit = 50) {
  await loadSessions();
  const [ts, diskSession] = getSession();

  let res = null;
  try {
    if (diskSession) {
      res = { data: await readIndexPageSession(lastSessionTS) };
    } else {
      res = await http.get(PASTEBIN_URL);
    }
  } catch (error) {
    logger.error(error);
    return;
  }

  logger.info(`🏁 Session ${ts} start`);

  if (!diskSession) {
    await dumpIndexPage(ts, res.data);
  }
  const items = parseIndexPage(res.data, limit);

  logger.info("🛒 Before adding items to DB: ", items);
  await LoadDb();

  await Promise.all(
    items.map(async (item, index) => {
      let snippetData;
      let status;
      const { id } = item;
      logger.info(`[${index}]: Scrapping page: ${id}`, item, ts);
      try {
        snippetData = await scrapeSnippetPage(ts, id, item);
      } catch (error) {
        logger.error(error);
        status = error.status;
      }
      const fullItemData = {
        ...item,
        ...snippetData,
        metadata: {
          session: ts,
          status,
        },
      };
      logger.info("👏 Item data after scrapping snippet page", fullItemData);
      await addItem(id, fullItemData);
    })
  );

  await addSession(ts);
  await dumpSessions();
  await dumpDb();
}

module.exports = {
  scrapeIndexPage,
};
