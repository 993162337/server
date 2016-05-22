var express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser");
    app = express(),
    handler = require("./userInfo");

function createServer() {
    app.use(express.static("./views"));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.listen(80, function() {
        console.log("Server running at http://127.0.0.1:80");
    });

    return app
}

exports.createServer = createServer
