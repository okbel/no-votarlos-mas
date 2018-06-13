const twit = require('twit');

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_TIMEOUT_MS,
} = require('../config');

function createTwitterClient() {
  const creadentials = {
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: TWITTER_TIMEOUT_MS,
  };

  const T = new twit(credentials);
  return T;
}

module.exports = {
  createTwitterClient,
};
