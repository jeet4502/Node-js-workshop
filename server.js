var http = require('http');
http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.end("WELCOME TO <br/> NODE JS");
}).listen(3000);

console.log("SERVER IS LISTENING ON http://127.0.0.1:3000");