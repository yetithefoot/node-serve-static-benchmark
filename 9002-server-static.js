const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')
 
// Serve up public/ftp folder 
const serve = serveStatic('/index.html');
const PORT = 9002;
// Create server 
http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
}).listen(PORT);
console.log(`node-static server up and listening on port ${PORT}`);