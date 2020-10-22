const { convertCsv } = require('../csv.parse');
const { open, read, close } = require('fs');

open('./data/data.csv', (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  const buffer = Buffer.alloc(200); // 200 Bytes long buffer

  const bufferLocation = 0;
  const fileLocation = 0;
  // The following function parameters have the following meaning:
  // - fd: what file to read from
  // - buffer: where to store the data
  // - bufferLocation: where in our buffer to start storing that data
  // - buffer.length: how much data read in
  // - fileLocation:  where into our file to start reading
  read(fd, buffer, bufferLocation, buffer.length, fileLocation, (err, count, buff) => {
    // err: error
    // count: the number of bytes that have been read
    // buff: the data that was read
    console.table(convertCsv(buff.toString('utf8')));
  });

  // Is important to close the file
  close(fd, () => {});
});
