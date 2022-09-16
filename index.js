const axios = require('axios');
const fs = require('fs/promises');
const cheerio = require('cheerio');

const PASTEBIN_BASE_URL = 'https://pastebin.com'
const PASTEBIN_URL = `${PASTEBIN_BASE_URL}/archive`

const pages = [];
const db = [];

async function dumpIndexPage(ts, html) {
    await fs.mkdir(`./dump/sessions/${ts}`);
    await fs.writeFile(`./dump/sessions/${ts}/index.htm`, html);
}

async function dumpSnippetPage(ts, id, html) {
    await fs.writeFile(`./dump/sessions/${ts}/${id}.htm`, html);
}

function parseItem($, ts, $tr) {
    const $a = $('td:first > a', $tr);
    const $sytax = $('a', $('td').eq(2))

    const link = $a.attr('href');

    return {
        id: link.slice(1),
        link,
        syntax: $sytax.text()
    }
}

function parseIndexPage(ts, html) {
    const $ = cheerio.load(html)
    const $tableRows = $('.archive-table .maintable tr');
    const items = [];
    $tableRows.each((i, $elm) => {
        if (i > 0) {
            items.push(parseItem($, ts, $elm));
        }
    })

    // console.log(items);
    return items
}

function parseSnippetPage(ts, html) {
    const $ = cheerio.load(html);
}

async function scrapeSnippetPage(ts, link, { id }) {
    const res = await axios.get(`${PASTEBIN_BASE_URL}/${link}`) 
    await dumpSnippetPage(ts, res.data, id);
    const resDl = await axios.get(`${PASTEBIN_BASE_URL}/dl/${id}`)

}

async function scrapeIndexPage() { 
    const res = await axios.get(PASTEBIN_URL)
    const ts = Date.now();
    pages.push({ ts, page: res.data});

    await dumpIndexPage(ts, res.data);    
    parseIndexPage(ts, res.data);
}

scrapeIndexPage();

module.exports = {
    parseIndexPage,
    parseItem
}