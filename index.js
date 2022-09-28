const axios = require('axios');
const fs = require('fs/promises');
const cheerio = require('cheerio');

const PASTEBIN_BASE_URL = 'https://pastebin.com'
const PASTEBIN_URL = `${PASTEBIN_BASE_URL}/archive`

const sessions = [];
const db = [];

async function dumpIndexPage(ts, html) {
    await fs.mkdir(`./dump/sessions/${ts}`);
    await fs.writeFile(`./dump/sessions/${ts}/index.htm`, html);
}

async function dumpSnippetPage(ts, id, html) {
    await fs.writeFile(`./dump/sessions/${ts}/${id}.htm`, html);
}

function buildSnippetPath(ts, id) {
   return `./dump/sessions/${ts}/${id}.dump.txt`; 
}
async function dumpSnippetText(ts, id, txt) {
    await fs.writeFile(buildSnippetPath(ts, id), txt); 
}

async function dumpDb() {
    await fs.writeFile('./dump/db.json', JSON.stringify(db, null, 2))
}
function parseItem($, $tr) {
    const $a = $('td:first > a', $tr);
    const $sytax = $('a', $('td').eq(2))

    const link = $a.attr('href');

    return {
        id: link.slice(1),
        link,
        syntax: $sytax.text()
    }
}

function parseIndexPage(html) {
    console.log(`Parsing page: ${html}`)
    const $ = cheerio.load(html)
    const $tableRows = $('.archive-table .maintable tr');
    const items = [];
    $tableRows.each((i, $elm) => {
        if (i > 0) {
            items.push(parseItem($, $elm));
        }
    })

    return items
}

function parseSnippetPage(html, { ts, id }) {
    const $ = cheerio.load(html);
    const $title = $('.info-bar h1')

    return {
        title: $title.text(),
        // TODO: author, Date
        filePath: buildSnippetPath(ts, id)
    }
}

async function scrapeSnippetPage(ts, link, { id }) {
    const res = await axios.get(`${PASTEBIN_BASE_URL}/${link}`) 
    await dumpSnippetPage(ts, res.data, id);
    const resDl = await axios.get(`${PASTEBIN_BASE_URL}/dl/${id}`)
    await dumpSnippetText(ts, id, resDl.data)
    return parseSnippetPage(res.data, { ts, id })
}

async function scrapeIndexPage() { 
    const res = await axios.get(PASTEBIN_URL)
    const ts = Date.now();
    
    await dumpIndexPage(ts, res.data);    
    const items = parseIndexPage(res.data);
   
    console.log(items)

    await Promise.all(items.map(async (item) => {
        const { link } = item;
        console.log(`Scrapping page: ${link}`)
        const snippetData = await scrapeSnippetPage(ts, link, item);
        
        db.push({
            ...item,
            ...snippetData 
        })
    }))
    
    sessions.push({ ts, db });
    await dumpDb()
}

scrapeIndexPage();

module.exports = {
    parseIndexPage,
    parseItem
}