# File manipulation

The current project contains code that demonstrates how to manipulate files in Node.js.

NOTE:

- Whenever you pass a path to a `fs` read function, eg. `readFile('./data/data.csv', ...)`, the file will be automatically closed
- Whenever you pass a file descriptor to a `fs` read function, eg. `readFile(fd, ...)`, you will have to take care to close the file
- Conclusion: **Any time you have a file descriptor, you are responsible for closing the file**

Recommended examples:
- for reading file use: `src/part_2/synchronous.read.partial.js`
