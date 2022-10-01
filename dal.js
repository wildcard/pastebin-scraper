global.sessions = [];
global.db = [];

const { readSessions } = require("./dump");
const { logger } = require('./logger')

async function updateDb(items) {
  let counter = 0;  
  try {
    global.db = JSON.parse(await fs.readFile("./dump/db.json"));
  } catch (error) {
    logger.info("No `db.json` file, probably first run on machine 🍺");
  }
  const set = new Set(db.map((i) => i.id));
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
  addItem
};
