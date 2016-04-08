var http = require("http");
var moduleone = require("./moduleone");
var modulotwo = require("./moduletwo");

const onRequest = (request, response) => {
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("hello word");
  response.write(moduleone.myString);
  moduleone.myFunction();

  modulotwo.myOtherFunction();
  console.log(modulotwo.myVariable);
  response.end();
}


http.createServer(onRequest).listen(8000);