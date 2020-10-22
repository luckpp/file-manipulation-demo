const fs = require('fs');

const fd = fs.openSync('./data/app.log');
let count = 0;

do {
  // We want to make sure that the buffer is initialized with all 0 every time we read
  const buffer = Buffer.alloc(200);

  // The position parameter has changed from `0` to `null`
  // If the value is `null`, Node will keep track where it was actually in the file and pick up there the next time we read
  count = fs.readSync(fd, buffer, 0, buffer.length, null);

  console.log(buffer.toString('utf8'));
} while (count > 0);

// Is important to close the file
fs.closeSync(fd);
