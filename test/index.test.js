const { scrapeIndexPage } = require("../index");

test("Run", async () => {
    await scrapeIndexPage(3);
});
