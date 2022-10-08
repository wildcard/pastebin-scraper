# Pastebin Scrapper 🗑

## Timelog

| Time        | Description                            |
| ----------- | -------------------------------------- |
| 00:30       | Playing with ideas                     |
| 16:44-18:00 | parsing tests                          |
| 18:00-18:30 | Dumping snippt page                    |
| 19:00-19:30 | prototyping Dumping snippet page       |
| 23:00-23:30 | Getting the exercise + setting this md |
| 23:30-00:00 | Continue scrapping item page           |
| 14:00-14:30 | Continue scrapping item page           |
| 15:00-16:30 | Parsing snippet page                   |
| 20:00-22:00 | refractor + loggs + working draft      |
| 17:00-20:00 | dir reorg + cli + pm2                  |

## How to run?

### local run using Node

Run the following commands (top to bottom)

1. `npm i`
2. `npm start`

### using npx

`npx pastebin-scrapper`

### Docker

use/pull my image

`docker run kobikadosh/pastebin-scrapper`

Or build your own

```sh
docker build ./ --tag pastebin-scrapper
docker run pastebin-scrapper
```

# Exercise

The following exercise is composed of both mandatory requirements and bonus parts.
*Please make sure to read it completely before beginning to write code.*

The exercise is as follows:

Write a simple web crawler (https://en.wikipedia.org/wiki/Web_crawler) in JavaScript/TypeScript.
The crawler should crawl the site: https://pastebin.com/ and should store the most recent "pastes" in a structured data model.

A paste model must have the following parameters:

- Author - `String`
- Title - `String`
- Content - `String`
- Date - `Date`


You'll need to gather each one of the "Public Pastes" from pastebin, and parse it into the above structure.

The code must be self-managed. It should crawl the site every 2 minutes and look for any new pastes to save.

For the most basic form of this exercise it will suffice to keep each paste in the above format in a different text file in a directory of your choosing.

Following are the bonus parts for this exercise:

### Bonus #1

Each one of the paste model's parameters must be normalized.
For example:
    
  * Author - In cases it's *Guest, Unknown, Anonymous, etc...* the author name must be the same, for example: "" (empty string)
  * Title - Same Behaviour as with *Author*.
  * Date - UTC Date
  * Content - Must be stripped of trailing spaces.

### Bonus #2

Store each one of the pastes in an organized database. It could be done with anything from a local **SQLite** database to a MongoDB docker container.

### Bonus #3

Ship your crawler in a **Docker image**. This will allow it to run on any platform and any computer without any necessary installations. docker-compose and docker swarm solutions are also welcome.
See https://www.docker.com/ for more details.

## General Notes (Apply with or without the bonus parts)

The code must be supplied with a README.md that explains how to create the environment for the code to run.

Emphasis should be placed on the following:

- Write clean code. Do not document unnecessary lines, (you can follow Node.js best practices here: https://github.com/goldbergyoni/nodebestpractices).
- The code must be readable, and the directory tree must be chosen wisely.
- The code must not have any eslint (linting) warnings at all.

We strongly recommend using the following libraries:

- axios (http client)
- cheerio (html parsing)
- MongoDB (storage)
- ~~moment.js~~ date-fns (dates)

Best of luck! :)
