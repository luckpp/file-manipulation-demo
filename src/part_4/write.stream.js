const { createReadStream, createWriteStream } = require('fs');
const { Stream } = require('stream');

const readStream = createReadStream('./data/app.lg', {
  highWaterMark: 95,
  encoding: 'utf8',
});

const writeStream = createWriteStream('./data/out-app.lg');

let iteration = 0;

readStream.on('data', (data) => {
  readStream.pause();
  console.log(++iteration);

  writeStream.write(data);

  setTimeout(() => {
    readStream.resume();
  }, 100);
});

// the code above can be replace with the following line
readStream.pipe(writeStream);
