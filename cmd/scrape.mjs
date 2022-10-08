#!/usr/bin/env node

import meow from "meow";
import { scrapeIndexPage } from "../lib/scrape.js";
import { logger } from "../lib/logger.js";

const cli = meow(
  `
	Usage
	  $ scrape -i <interval time in minutes>

	Options
	  --interval, -i  time in minutes between scrape runs
      --items number of items to scrape from the archive page
	Examples
	  $ scrape -i 3
`,
  {
    importMeta: import.meta,
    flags: {
      interval: {
        type: "number",
        alias: "i",
        default: 2,
      },
      items: {
        type: "number",
        default: 50,
      },
    },
  }
);

function run() {
  logger.info(
    `🤖 Run CLI with args: interval=${cli.flags.interval}, num of items=${cli.flags.items}`
  );
  scrapeIndexPage(cli.flags.items);

  setTimeout(() => {
    run();
  }, cli.flags.interval * 60 * 1000);
}

run();