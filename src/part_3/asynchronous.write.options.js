const { constants, writeFile } = require('fs');

// use flags
writeFile(
  './data/app-write.lg',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-test" 405 21512',
  { flag: 'wx' },
  (err) => (err ? console.log(err) : console.log('file saved'))
);

// sets OS level permissions
writeFile(
  './data/app-permissions-write.lg',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-test" 405 21512',
  { mode: constants.S_IWUSR | constants.S_IRUSR },
  (err) => (err ? console.log(err) : console.log('file saved'))
);

// sets OS level permissions
writeFile(
  './data/app-base64-write.lg',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-test" 405 21512',
  { encoding: 'base64' },
  (err) => (err ? console.log(err) : console.log('file saved'))
);
