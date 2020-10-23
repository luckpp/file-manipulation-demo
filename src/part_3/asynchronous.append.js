const { writeFile, appendFile } = require('fs');

// this call will append data to the file
writeFile(
  './data/app-write.lg',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-test" 405 21512 - writeFile\n',
  { flag: 'a' },
  (err) => (err ? console.log(err) : console.log('file saved'))
);

// an alternative to the previous call
appendFile(
  './data/app-write.lg',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-test" 405 21512 - appendFile\n',
  (err) => (err ? console.log(err) : console.log('file saved'))
);
