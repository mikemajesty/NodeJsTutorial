var url = require("url");
var fs = require("fs");

var renderHtml = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      response.writeHead(404);
      response.write("File not Found");
    }
    else {
      response.write(data);
    }
    response.end();

  });
};

module.exports = {
  handleRequest: (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    var path = url.parse(request.url).pathname;

    switch (path) {
      case "/":
        renderHtml("./index.html", response);
        break;
      case "/login":
        renderHtml("./login.html", response);
        break;
      default:
        response.writeHead(404)
        response.write("Page not Found")
        response.end();
    }

  }
};