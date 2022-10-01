const fs = require("fs/promises");
const { buildSnippetPath } = require("./const");
const { logger } = require("./logger");

async function dumpDb() {
  logger.info("Save DB to disk");
  await fs.writeFile("./dump/db.json", JSON.stringify(global.db, null, 2));
}
async function readDb() {
  return await fs.readFile("./dump/db.json");
}
async function dumpSessions() {
  logger.info("Save sessions to disk");
  await fs.writeFile("./dump/sessions.json", JSON.stringify(global.sessions, null, 2));
}

async function readSessions() {
  try {
    return JSON.parse(await fs.readFile("./dump/sessions.json"));
  } catch (error) {
    console.warn("No sessions.json, can be due to first run");
    return [];
  }
}

async function readIndexPageSession(ts) {
  logger.info(`Read index.htm from session: ${ts}`);
  return await fs.readFile(`./dump/sessions/${ts}/index.htm`);
}

async function dumpIndexPage(ts, html) {
  await fs.mkdir(`./dump/sessions/${ts}`);
  await fs.writeFile(`./dump/sessions/${ts}/index.htm`, html);
}

async function readSnippetPage(ts, id) {
  logger.info(`Read ${id}.htm from session: ${ts}`);
  await fs.readFile(`./dump/sessions/${ts}/${id}.htm`);
}

async function dumpSnippetPage(ts, id, html) {
  await fs.writeFile(`./dump/sessions/${ts}/${id}.htm`, html);
}

async function dumpSnippetText(ts, id, txt) {
  await fs.writeFile(buildSnippetPath(ts, id), txt);
}

module.exports = {
  dumpDb,
  readDb,
  dumpSessions,
  readSessions,
  dumpIndexPage,
  dumpSnippetPage,
  dumpSnippetText,
  readIndexPageSession,
  readSnippetPage,
};
