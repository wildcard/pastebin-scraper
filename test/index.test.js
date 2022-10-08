const { scrapeIndexPage } = require("../lib/scrape");

test("Run", async () => {
    await scrapeIndexPage(3);
});
