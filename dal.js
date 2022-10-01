global.sessions = [];
global.db = [];

const { readSessions, readDb } = require("./dump");
const { logger } = require('./logger')

async function updateDb(items) {
  let counter = 0;  
  try {
    global.db = JSON.parse(await readDb());
  } catch (error) {
    logger.info("No `db.json` file, probably first run on machine 🍺");
  }
  const set = new Set(global.db.map((i) => i.id));
  items.forEach((i) => {
    if (!set.has(i)) {
        global.db.push(i);
        counter++;
    }
  });

  logger.info(`Add ${counter} to DB`)
}

async function loadSessions() {
  global.sessions = await readSessions();
}

function addSession(ts) {
    global.sessions.unshift(ts);
}

function getSessions() {
    return global.sessions;
}

async function addItem(id, data) {
    global.db.push(data);
}

module.exports = {
  updateDb,
  loadSessions,
  getSessions,
  addSession,
  addItem
};
