const { writeFile } = require('fs');

// this call will overwrite the file
writeFile(
  './data/app-write.lg',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-test" 405 21512',
  (err) => (err ? console.log(err) : console.log('file saved'))
);
