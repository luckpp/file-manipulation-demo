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
