var http = require("http");

const onRequest = (request, response) => {
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("hello word");
  response.end();
}


http.createServer(onRequest).listen(8000);