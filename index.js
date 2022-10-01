const {
  PASTEBIN_URL,
  buildRawSnippetPageUrl,
  buildSnippetPageUrl,
} = require("./const");
const { updateDb, loadSessions, addItem, addSession } = require("./dal");
const { loadOrFetchPageInSession } = require("./http");
const {
  dumpSessions,
  dumpSnippetPage,
  dumpSnippetText,
  dumpIndexPage,
  dumpDb,
} = require("./dump");
const { parseIndexPage, parseSnippetPage } = require("./parse");
const { logger } = require("./logger");

async function scrapeSnippetPage(ts, id) {
  let diskSession = null,
    res,
    resRaw;
  [res, diskSession] = await loadOrFetchPageInSession(buildSnippetPageUrl(id));
  if (!diskSession) {
    await dumpSnippetPage(ts, id, res.data);
  }

  [resRaw, diskSession] = await loadOrFetchPageInSession(
    buildRawSnippetPageUrl(id), { id }
  );
  if (!diskSession) {
    await dumpSnippetText(ts, id, resRaw.data.toString());
  }
  return parseSnippetPage(res.data, { ts, id });
}

async function scrapeIndexPage(limit = 50) {
  let diskSession = null;
  await loadSessions();

  let res = null;
  try {
    [res, diskSession] = await loadOrFetchPageInSession(PASTEBIN_URL);
  } catch (error) {
    logger.error(error);
    return;
  }
  const ts = Date.now();
  logger.info(`🏁 Session ${ts} start`);

  if (!diskSession) {
    await dumpIndexPage(ts, res.data);
  }
  const items = parseIndexPage(res.data, limit);

  logger.info("🛒 Before adding items to DB: ", items);
  await updateDb(items);

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
        }
      };
      logger.info("👏 Item data after scrapping snippet page", fullItemData);
      await addItem(id, fullItemData);
    })
  );

  addSession(ts);
  await dumpSessions();
  await dumpDb();
}

module.exports = {
  scrapeIndexPage,
};
