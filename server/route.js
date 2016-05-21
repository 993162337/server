function handleRoute(app) {
    app.get("/fetchInfo", function(req, res) {
        console.log("Request body: " + req.query.openid);
        res.send("We get openid: " + openid + " success! ");
        res.end();
    })
}

exports.handleRoute = handleRoute
