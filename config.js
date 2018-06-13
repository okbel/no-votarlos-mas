module.exports = {
  //
  //
  //
  //
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_PROVIDERS: ['https://www.googleapis.com/auth/spreadsheets'],
  GOOGLE_SPREADSHEET_ID:
    process.env.GOOGLE_SPREADSHEET_ID ||
    '18Q3kTrNtTYUyscylEly5mMms_n9g_sj0IPdAnn-9EME',
  GOOGLE_SPREADSHEET_RANGE:
    process.env.GOOGLE_SPREADSHEET_ID || 'diversidadmedia!C16:H1017',
  //
  //
  //
  //
  TWITTER_HANDLE: process.env.TWITTER_CONSUMER_KEY || '@diversidadM',
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_TIMEOUT_MS: process.env.TWITTER_TIMEOUT_MS || '60000',
};
