const net = require('net')

function isAddZero (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    const d = new Date()
    return d.getFullYear() + '-' +
        isAddZero(d.getMonth() + 1) + '-' +
        isAddZero(d.getDate()) + ' ' +
        isAddZero(d.getHours()) + ':' +
        isAddZero(d.getMinutes())
}

const server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
