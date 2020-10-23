const { openSync, closeSync, writeSync, readdirSync, watch } = require('fs');
const { camelCase } = require('camel-case');

watch('./data', (event, fileName) => {
  console.log(event, fileName);
});

const indexFd = openSync('./data/files.txt', 'w');

const files = readdirSync('./src');

files.map((f) => {
  const name = f.replace('js', '');
  console.log(`Adding a file: ${f}`);
  const line = `camel-case name: ${camelCase(name)}\n`;
  writeSync(indexFd, line);
});

closeSync(indexFd);
