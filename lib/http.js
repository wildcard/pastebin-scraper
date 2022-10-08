const axios = require("axios");
const rateLimit = require("axios-rate-limit");
const Agent = require("agentkeepalive");
require("axios-debug-log/enable");

const http = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
  maxRPS: 2,
});

function createHttpAgent() {
  return new Agent({
    maxSockets: 100,
    maxFreeSockets: 10,
    timeout: 60000,
    freeSocketTimeout: 30000,
  });
}

function createHttpsAgent() {
  return new Agent.HttpsAgent({
    maxSockets: 100,
    maxFreeSockets: 10,
    timeout: 60000,
    freeSocketTimeout: 30000,
  });
}

http.defaults.httpAgent = createHttpAgent();
http.defaults.httpsAgent = createHttpsAgent();

module.exports = {
  http,
};
