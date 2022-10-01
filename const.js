const PASTEBIN_BASE_URL = "https://pastebin.com";
const PASTEBIN_URL = `${PASTEBIN_BASE_URL}/archive`;

function buildSnippetPath(ts, id) {
  return `./dump/sessions/${ts}/${id}.dump.txt`;
}

function buildRawSnippetPageUrl(id) {
  return `${PASTEBIN_BASE_URL}/raw/${id}`;
}


function buildSnippetPageUrl(id) {
    return `${PASTEBIN_BASE_URL}/${id}`;
}


module.exports = {
  PASTEBIN_BASE_URL,
  PASTEBIN_URL,
  buildSnippetPath,
  buildRawSnippetPageUrl,
  buildSnippetPageUrl
};
