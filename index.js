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
  getRandomMovieFromSpreadSheet,
} = require('./utils');

function init() {
  // Starting bot
  console.info('Running Diversidad Media Bot');

  const glClient = createGoogleClient();
  const twClient = createTwitterClient();

  const twStream = twClient.stream('statuses/filter', {
    track: [TWITTER_HANDLE],
  });

  twStream.on('tweet', (tweet) => {
    var twittero = tweet.user.screen_name;
    var nameID = tweet.id_str;

    getRandomMovieFromSpreadSheet(
      GOOGLE_SPREADSHEET_ID,
      GOOGLE_SPREADSHEET_RANGE,
      glClient
    ).then((movie) => {
      const [name, year, gen, theme, trailer] = movie;

      let params = {
        status: `Hola @${twittero}! te recomiendo: ${name} (${year}) - Género / Temática: ${gen} ${theme} - Trailer: ${trailer}`,
        in_reply_to_status_id: nameID,
      };

      twClient.post('statuses/update', params, (err, data, response) => {
        if (err !== undefined) {
          console.log(err);
        } else {
          console.log(`Tweeted: ${params.status}`);
        }
      });
    });
  });

  setInterval(function() {
    getRandomMovieFromSpreadSheet(
      GOOGLE_SPREADSHEET_ID,
      GOOGLE_SPREADSHEET_RANGE,
      glClient
    ).then((movie) => {
      const [name, year, gen, theme, trailer] = movie;
      twClient.post('statuses/update', {
        status: `${name} (${year}) - Género / Temática: ${gen} ${theme} - Trailer: ${trailer}`,
      });
    });
  }, 7.2e6); // 2hs
}

module.exports = {
  init,
};
