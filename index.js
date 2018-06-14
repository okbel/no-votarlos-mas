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

  getRandomFromSpreadSheet(
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_SPREADSHEET_RANGE,
    glClient
  ).then((row) => {
    const [name, handle, _, quote] = row;
    twClient.post('statuses/update', {
      status: `${name} (${handle}): ${quote}`,
    });
  });

  setInterval(() => {
    getRandomFromSpreadSheet(
      GOOGLE_SPREADSHEET_ID,
      GOOGLE_SPREADSHEET_RANGE,
      glClient
    ).then((row) => {
      const [name, handle, _, quote] = row;
      twClient.post('statuses/update', {
        status: `${name} (${handle}): ${quote}`,
      });
    });
  }, 900000); // 15 mins
}

init();
