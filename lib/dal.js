global.sessions = [];
global.db = [];

const { readSessions, readDb } = require("./dump");
const { logger } = require("./logger");
const { connect } = require("./db");
const PasteModel = require("./models/Paste");

let connection = null;
let Paste = null;

async function LoadDb() {
  try {
    connection = await connect();
    Paste = PasteModel(connection);

    await connection.sync();

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
  const { author, title, date, syntax, filePath, metadata, ...other } = data;
  try {
    const [paste, created] = await Paste.findOrCreate({
      where: {
        key: id,
      },
      defaults: {
        author,
        title,
        date,
        syntax,
        contentPath: filePath,
        metadata: { ...metadata, ...other },
      },
    });

    if (created) {
      logger.info(`🎉 Created a new Paste in DB with key: ${id}`);
    } else {
      logger.info(`⏩ Skipped a Paste with key: ${id} already exists in the DB`);
    }
  } catch (error) {
    logger.error(error);
  }
  global.db.push(data);
}

module.exports = {
  LoadDb,
  loadSessions,
  getSessions,
  addSession,
  addItem,
};
