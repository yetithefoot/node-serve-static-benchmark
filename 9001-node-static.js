const static = require('node-static');
 
// 
// Create a node-static server instance to serve the './public' folder 
// 
const server = new static.Server('./dist/index.html');
const PORT = 9001; 
require('http')
.createServer(function (request, response) {
    request.addListener('end', function () {
        server.serve(request, response);
    }).resume();
}).listen(PORT);
console.log(`node-static server up and listening on port ${PORT}`);