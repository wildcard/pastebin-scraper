const cheerio = require("cheerio");

const { 
    parseSnippetPage,
    parseIndexPage,
    parseItem,
 } = require('../parse')
const { htmlTableLiteDump, htmlSnippetPageDump } = require("./mocks");


describe("Parsing Lite", () => {
  test("Table", () => {
    const items = parseIndexPage(htmlTableLiteDump);

    expect(items.length).toEqual(4);
    expect(items.map((i) => i.id)).toEqual([
      "6ryvL9V2",
      "jWHZjpCC",
      "Lg2LV0a0",
      "pJEPaduj",
    ]);
    expect(items).toMatchSnapshot();
  });

  test("Table with limit=2", () => {
    const items = parseIndexPage(htmlTableLiteDump, 2);
    expect(items.length).toEqual(2);
    expect(items.map((i) => i.id)).toEqual(["6ryvL9V2", "jWHZjpCC"]);
    expect(items).toMatchSnapshot();
  });

  test("Item", () => {
    const $ = cheerio.load(htmlTableLiteDump);
    const $tr = $(".archive-table .maintable tr").first();

    const { id, title, syntax } = parseItem($, null, $tr);
    expect(id).toEqual("6ryvL9V2");
    expect(title).toEqual("AuthGuard");
    expect(syntax).toEqual("TypeScript");
  });

  test("Snippet page", () => {
    const ts = "0000";
    const id = "XXX";
    const { title, author, date, filePath } = parseSnippetPage(
      htmlSnippetPageDump,
      { ts, id }
    );

    console.log(title, author, date, filePath)
    expect(title).toEqual("Untitled");
    expect(author).toEqual("AntonGorokhov");
    expect(date).toEqual("2022-10-01T00:00:00+03:00")
    expect(filePath).toEqual("./dump/sessions/0000/XXX.dump.txt")
  });
});

