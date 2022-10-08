const cheerio = require("cheerio");
const parse = require("date-fns/parse");
const formatISO = require("date-fns/formatISO");

const { buildSnippetPath } = require('./const')
const { logger } = require('./logger')

function parseItem($, $tr) {
  const $a = $("td:first > a", $tr);
  const $syntax = $("a", $("td", $tr).eq(2));
  const link = $a.attr("href");

  return {
    id: link.slice(1),
    title: $a.text(),
    syntax: $syntax.text(),
  };
}

function parseIndexPage(html, limitRows) {
  const $ = cheerio.load(html);
  const $tableRows = $(".archive-table .maintable tr:nth-child(n+2)");
  const items = [];
  $tableRows.slice(0, limitRows).each((i, $elm) => {
    items.push(parseItem($, $elm));
  });

  return items;
}

function parseDate($date) {

  try {
    logger.info(`Parsing date: ${$date.text()}`)
    const parsedDate = parse($date.text(), "LLL do, yyyy", new Date());
    return formatISO(parsedDate); 
  } catch (error) {
    logger.error(error)
    return '';
  }
}

function parseTitle($title) {
  const titleText = $title.text();
  return titleText === 'Untitled' ? '' : titleText;
}

function parseAuthor($author) {
  const authorText = $author.text()
 return ['a guest', 'Guest', 'Unknown', 'Anonymous'].includes(authorText) ? '' : authorText; 
}

function parseSnippetPage(html, { ts, id }) {
  const $ = cheerio.load(html);
  const $title = $(".info-bar h1");
  const $author = $(".info-bottom .username > a");
  const $date = $(".info-bottom .date > span").first();

  return {
    title: parseTitle($title),
    author: parseAuthor($author),
    date: parseDate($date),
    filePath: buildSnippetPath(ts, id),
  };
}

module.exports = {
  parseIndexPage,
  parseItem,
  parseSnippetPage,
};
