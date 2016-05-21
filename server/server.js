var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    handler = require("./userInfo");

function createServer() {
    app.use(express.static("./views"));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.listen(3000, function() {
        console.log("Server running at http://127.0.0.1:3000");
    });

    return app
}

exports.createServer = createServer
