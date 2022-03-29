const http = require('http')
const port = process.env.PORT || 3005
const serverListener = require('./serverListener')
const server = http.createServer(serverListener)

server.listen(port)