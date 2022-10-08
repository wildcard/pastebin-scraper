# syntax=docker/dockerfile:1

FROM node:16.16.0-alpine

COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]

RUN yarn global add pm2

RUN yarn

COPY . .

CMD [ "yarn", "run", "runtime" ]