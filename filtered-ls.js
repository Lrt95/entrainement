const fs = require('fs')
const path = require('path')

console.log(process.argv)

const folder = process.argv[2]
const ext = '.' + process.argv[3]


fs.readdir(folder, function (err, data) {
    if (err) return console.error(err)
    data.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})
