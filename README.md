# File manipulation

The current project contains code that demonstrates how to manipulate files in Node.js.

NOTE:

- Whenever you pass a path to a `fs` read function, eg. `readFile('./data/data.csv', ...)`, the file will be automatically closed
- Whenever you pass a file descriptor to a `fs` read function, eg. `readFile(fd, ...)`, you will have to take care to close the file
- Conclusion: **Any time you have a file descriptor, you are responsible for closing the file**

Recommended examples:

- for reading file use: `src/part_2/synchronous.read.partial.js`

## Write flags

Main flags:

- `r`: read mode
- `w`: write mode
- `a`: append mode

Addon flags (that can be added to the _Main flags_):

- `x`: exclusive mode
  - `wx` write if the file does not exist
- `+`: multiple modes
  - `r+` opens for both read and write and if the file does not exist throws exception
  - `w+` opens for both read and write and if the file does not exist creates the file
  - `a+` opens for both read and append and if the file does not exist creates the file
- `s`: synchronous (has to do with file I/O and not with JS function)
  - `rs+` opens for both read and write synchronously

Allowed combinations for **read**:

- `r`
- `r+`
- `rs+`

Allowed combinations for **write**:

- `w`
- `wx`
- `w+`
- `wx+` (will open in read and write mode and throws if the file exists)

Allowed combinations for **append**:

- `a`
- `ax`
- `a+`
- `ax+`
- `as`
- `as+`

# Streams

With streams you do not read a stream with a function, instead you receive data via an event.

```js
const { createReadStream } = require('fs');

const stream = createReadStream('./data/app.lg');

stream.on('data', (data) => console.log(data));
```

The default size data read out of a stream is **64 kB**. You can change that via the option `highWaterMark`.

```js
const stream = createReadStream('./data/app.lg', {
  highWaterMark: 10240,
});
```

You could also specify the encoding of the data that you read from a stream:

```js
const stream = createReadStream('./data/app.lg', {
  highWaterMark: 9550,
  encoding: 'utf8',
});
```

## Pausing a stream

Sometimes the data from a stream comes muck faster than our capability to process it. In those cases we want to make sure that while we process a `data` event we do not receive additional `data` events.

```js
stream.on('data', (data) => {
  stream.pause();
  console.log(data);
  setTimeout(() => {
    stream.resume();
  }, 1000);
});
```

## Writing to streams

The flags used to create a write stream are similar to the ones used to directly write to files.

```js
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
```

In order to remove the **back pressure** that can arise from the write stream being slower as the write stream we can pipe streams:

```js
const { createReadStream, createWriteStream } = require('fs');
const { Stream } = require('stream');

const readStream = createReadStream('./data/app.lg', {
  highWaterMark: 95,
  encoding: 'utf8',
});

const writeStream = createWriteStream('./data/out-app.lg');

readStream.pipe(writeStream);
```
