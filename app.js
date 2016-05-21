var server = require("./server/server"),
    user = require("./server/userInfo"),
    route = require("./server/route");

// create a web server
server.createServer(serverCall);

// used to handle app after server created
function serverCall(app) {
    route.handleRoute(app);
    user.fetchUserInfo();
    console.log("hello world");
}
