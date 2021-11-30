var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    const filename = process.argv[3]

    const readStream = fs.createReadStream(filename);

    readStream.on('open', function () {
        readStream.pipe(res);
    });

    readStream.on('error', function (err) {
        res.end(err);
    });
}).listen(process.argv[2]);