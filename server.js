var http = require("http");
var app = require("./app");



http.createServer(app.handleRequest).listen(8000);

// var moduleone = require("./moduleone");
// var modulotwo = require("./moduletwo");
// var fs = require("fs");


// const onRequest = (request, response) => {
//   response.writeHead(200,{"Content-Type":"text/html"});
//   fs.readFile("./index.html",null,(err,data)=>{
//      console.log("wtf",data);
//      if (err){
//         response.writeHead(404);
//         response.write("File not Found");
//       }
//       else{
//         response.write(data);
//        }
//       response.end();
//   });
  // response.write("index.html");
  // response.write(moduleone.myString);
  // moduleone.myFunction();

  // modulotwo.myOtherFunction();
  // console.log(modulotwo.myVariable);
  // response.end();
//}


//http.createServer(onRequest).listen(8000);