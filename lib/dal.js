global.sessions = [];
global.db = [];

const { readSessions, readDb } = require("./dump");
const { logger } = require('./logger')

async function LoadDb() {
  try {
    global.db = JSON.parse(await readDb());
  } catch (error) {
    logger.error(error);
    logger.info("No `db.json` file, probably first run on machine 🍺");
  }
}

async function loadSessions() {
  global.sessions = await readSessions();
}

async function addSession(ts) {
    global.sessions.unshift(ts);
}

function getSessions() {
    return global.sessions;
}

async function addItem(id, data) {
    global.db.push(data);
}

module.exports = {
  LoadDb,
  loadSessions,
  getSessions,
  addSession,
  addItem
};
