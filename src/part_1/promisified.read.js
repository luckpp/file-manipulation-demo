const { convertCsv } = require('../csv.parse');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

// readFileAsync('./data/data.cs', 'utf8')
//   .then((data) => console.table(convertCsv(data)))
//   .catch((err) => console.log(err));

const read = async () => {
  try {
    const data = await readFileAsync('./data/data.csv', 'utf8');
    console.table(convertCsv(data));
  } catch (err) {
    console.log(err);
  }
};

read();
