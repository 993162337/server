exports.handleRoute = function (app) {
    app.post("/fetchInfo", function(req, res) {
        console.log("Request body: " + req.body);
    })
}
