function handleRoute(app) {
    app.get("/", function(req, res) {
        console.log("Get user cookies: " + req.query.user);
        res.send("The user's cookies is: " + req.query.user);
        res.end();
    });

    app.get("/fetchInfo/", function(req, res) {
        var ip = req.query.openid;
        console.log("Request body: " + req.query);
        res.send("We get openid: " + req.query + " success! ");
        res.end();
    });

    app.get("/fetchToken", function(req, res) {
        var token = req.query.token;
        res.send("993162337");
        res.end();
    });
}

exports.handleRoute = handleRoute
