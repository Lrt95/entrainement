const http = require('http')

function getTime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function getUnixtime (time) {
    return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
    const parsedUrl = new URL(req.url, 'http://example.com')
    const time = new Date(parsedUrl.searchParams.get('iso'))
    let result

    if (/^\/api\/parsetime/.test(req.url)) {
        result = getTime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = getUnixtime(time)
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))
