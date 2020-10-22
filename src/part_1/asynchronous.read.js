const { convertCsv } = require('../csv.parse');
const { readFile } = require('fs');

readFile('./data/data.csv', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const values = convertCsv(data);
  console.table(values);
});
