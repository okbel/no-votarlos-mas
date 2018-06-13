function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getIdx(max, pickedIds = []) {
  const min = 0;

  let idx = getRandomNumber(min, max);

  while (pickedIds.indexOf(idx) !== -1) {
    idx = getRandomNumber(min, max);

    // The number of tries is greater than the number of quotes we need to start again.
    // It means that we picked them all
    if (pickedIds.length === max) {
      pickedIds = [];
    }
  }

  pickedIds.push(idx);
  return idx;
}

const getRandomFromSpreadSheet = (spreadsheetId, range, google) => {
  if (!spreadsheetId) {
    throw new Error('No spreadsheet id provided');
  }

  if (!range) {
    throw new Error('No range provided');
  }

  if (!google) {
    throw new Error('No client provided');
  }

  let pickedIds = [];
  const sheets = google.sheets('v4');

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId,
        range,
      },
      (err, response) => {
        if (err) reject(err);
        const values = response.data.values;
        resolve(values[getIdx(values.length, pickedIds)]);
      }
    );
  });
};

module.exports = {
  getRandomNumber,
  getIdx,
  getRandomFromSpreadSheet,
};
