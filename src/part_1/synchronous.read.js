const { convertCsv } = require('../csv.parse');
const { readFileSync } = require('fs');

try {
  const data = readFileSync('./data/data.csv', 'utf8');
  const values = convertCsv(data);
  console.table(values);
} catch (err) {
  console.log(err);
}
