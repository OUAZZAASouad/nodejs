const fs  = require('fs')
fileNames = fs.readFileSync(process.argv[2])
const str = fileNames.toString()
console.log(str.split('\n').length - 1)