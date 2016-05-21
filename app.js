var server = require("./server/server"),
    user = require("./server/userInfo"),
    route = require("./server/route");

// create a web server
var app = server.createServer();

route.handleRoute(app);
user.fetchUserInfo();
