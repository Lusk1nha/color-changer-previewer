const http = require('http')

const nStatic = require('node-static')
var fileServer = new nStatic.Server('./static')

let PORT = 5000

http.createServer((req, res) => {
    fileServer.serve(req, res)

}).listen(PORT, () => {
    console.log(`Started server in localhost:${PORT}`)
        
})