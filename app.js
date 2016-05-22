var server = require("./server/server"),
    user = require("./server/userInfo"),
    route = require("./server/route"),
    mysql = require('mysql');

// create a web server
var app = server.createServer();

route.handleRoute(app);

// connect to mysql
var TEST_TABLE = "award_user";

var connection = mysql.createConnection({
    hostname: "pythontest.ccvmhzzhf3ic.ap-northeast-1.rds.amazonaws.com:3306",
    database: "titan",
    user: "woolson",
    password: "993162337",
});

connection.connect();

var sql = "SELECT * FROM " + TEST_TABLE;
connection.query(sql, function(err, rows, fields) {
    console.log(err, rows, fields);
})

connection.end();
