const path = require('path');  
const http = require('http');

const staticBasePath = './dist/index.html';
const PORT = 9003;

function staticServe(req, res) {  
    res.statusCode = 200;
    res.write(staticBasePath);
    return res.end();
};

http.createServer(staticServe).listen(PORT);  
console.log(`vanilla node server up and listening on port ${PORT}`);
