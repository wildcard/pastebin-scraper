const axiosVCR = require("axios-vcr");
const { scrapeIndexPage } = require("../lib/scrape");

describe("VCR", () => {
  test("run", async () => {
    axiosVCR.mountCassette("./fixtures/session.json");

    await scrapeIndexPage(10);

    axiosVCR.ejectCassette("./fixtures/session.json");
  }, 50000);
});
