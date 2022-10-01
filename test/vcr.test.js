const axiosVCR = require("axios-vcr");
const { scrapeIndexPage } = require("../index");

describe("VCR", () => {
  test("run", async () => {
    axiosVCR.mountCassette("test/fixtures/session.json");

    await scrapeIndexPage(10);

    axiosVCR.ejectCassette("test/fixtures/session.json");
  }, 50000);
});
