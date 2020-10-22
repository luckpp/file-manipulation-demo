const fs = require('fs');

console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync('./data/app.log');
  console.log('Index:', i, ' | File Descriptor: ', fd);
  fs.closeSync(fd);
}

// NOTE: OS have limits about the number of files that can be opened at any given time
