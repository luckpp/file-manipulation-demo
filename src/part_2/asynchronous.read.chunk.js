const fs = require('fs');

let totalSize = 0;

fs.stat('./data/app.lg', (err, { size }) => (totalSize = size));

fs.open('./data/app.lg', (err, fd) => {
  const buffer = Buffer.alloc(200);

  for (let i = 0; i <= totalSize / buffer.length; i++) {
    fs.read(fd, buffer, 0, buffer.length, i * buffer.length, (err, bytesRead, buff) => {
      console.log(buff.toString('utf8'));
    });
  }

  // Is important to close the file
  fs.close(fd, () => {});
});

// NOTE: the solution above has two issues:
// - you have to keep track of the length of the buffer
// - the async callback functions on read have no guarantee that they will be used in order since they are called async
