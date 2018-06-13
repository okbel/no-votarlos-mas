const {
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_PROVIDERS,
} = require('./config');

const createGoogleClient = () => {
  const auth = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_PROVIDERS,
    null
  );

  return google.options({ auth });
};

module.exports = {
  createGoogleClient,
};
