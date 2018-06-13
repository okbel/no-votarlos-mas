const { createGoogleClient } = require('./services/google');
const { createTwitterClient } = require('./services/twitter');
const {
  GOOGLE_SPREADSHEET_ID,
  GOOGLE_SPREADSHEET_RANGE,
  TWITTER_HANDLE,
} = require('./config');

const {
  getRandomNumber,
  getIdxQuote,
  getRandomFromSpreadSheet,
} = require('./utils');

function init() {
  // Starting bot
  console.info('Running Bot');

  const glClient = createGoogleClient();
  const twClient = createTwitterClient();

  setInterval(() => {
    getRandomFromSpreadSheet(
      GOOGLE_SPREADSHEET_ID,
      GOOGLE_SPREADSHEET_RANGE,
      glClient
    ).then((row) => {
      const [name, handle] = row;
      twClient.post('statuses/update', {
        status: `${name} - ${handle}`,
      });
    });
  }, 1.8e6); // 30 mins
}

init();
