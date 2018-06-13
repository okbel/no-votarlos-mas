const { google } = require('googleapis');

const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = require('../config');

const createGoogleClient = () => {
  const auth = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/spreadsheets'],
    null
  );

  google.options({ auth });

  return google;
};

module.exports = {
  createGoogleClient,
};
