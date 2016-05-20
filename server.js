var http = require("http"),
    url = require("url"),
    fs = require("fs"),
    user = require("./userOption");

http.createServer(function(request, response) {
    var pathName = url.parse(request.url).pathname, file;

    user.getBaseInfo();

    if(pathName == "/") {
        file = "index.html";
    }else {
        file = "." + pathName;
    }

    fs.readFile(file, function(err, data) {
        if(err) {
            console.log(err);

            response.writeHead(404, {"Content-Type": "text/html"});
        }else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data.toString());
        }

        response.end()
    })
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080/");
