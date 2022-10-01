const axios = require("axios");
const rateLimit = require("axios-rate-limit");
const Agent = require("agentkeepalive");
require("axios-debug-log/enable");
const { PASTEBIN_BASE_URL, PASTEBIN_URL } = require("./const");
const { getSessions } = require("./dal");
const { readIndexPageSession, readSnippetPage } = require("./dump");
const { logger } = require("./logger");
var differenceInMinutes = require("date-fns/differenceInMinutes");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");
const formatDistance = require("date-fns/formatDistance");

const http = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
  maxRPS: 2,
});

function createHttpAgent() {
  return new Agent({
    maxSockets: 100,
    maxFreeSockets: 10,
    timeout: 60000,
    freeSocketTimeout: 30000,
  });
}

function createHttpsAgent() {
  return new Agent.HttpsAgent({
    maxSockets: 100,
    maxFreeSockets: 10,
    timeout: 60000,
    freeSocketTimeout: 30000,
  });
}

http.defaults.httpAgent = createHttpAgent();
http.defaults.httpsAgent = createHttpsAgent();

async function loadOrFetchPageInSession(url, thresholdMinutes = 2, { id }={}) {
  const sessions = getSessions();
  const now = Date.now();
  if (sessions.length > 0) {
    const lastSessionTS = sessions[0];
    logger.info(`Last Session was: ${formatDistanceToNow(lastSessionTS)}`);
    if (differenceInMinutes(now, lastSessionTS) <= thresholdMinutes) {
      logger.info(
        `Retrive session files from disk, last session was ${formatDistance(
          now,
          lastSessionTS
        )}`
      );
      if (url === PASTEBIN_URL) {
        return [{ data: await readIndexPageSession(lastSessionTS)}, true];
      } else {
        return [{ data: await readSnippetPage(lastSessionTS, id)}, true];
      }
    }
  }

  return [await http.get(url)];
}

module.exports = {
  http,
  loadOrFetchPageInSession,
};
