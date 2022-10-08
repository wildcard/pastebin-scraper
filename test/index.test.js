const { scrapeIndexPage } = require("../scrape");

test("Run", async () => {
    await scrapeIndexPage(3);
});
