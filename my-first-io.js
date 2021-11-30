const fs = require('fs')

const contentFile = fs.readFileSync(process.argv[2])
const line = contentFile.toString().split('\n').length - 1
console.log(process.argv)
console.log(line)
