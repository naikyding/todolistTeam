const http = require('http')
const port = process.env.PORT || 3005
const { todoDBConnect } = require('./todoDB')
todoDBConnect()

const serverListener = require('./serverListener')
const server = http.createServer(serverListener)

server.listen(port)