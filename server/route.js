var request = require("request");

function handleRoute(app) {
    app.get("/", function(req, res) {
        console.log("Get user cookies: " + req.query.user);
        res.send("The user's cookies is: " + req.query.user);
        res.end();
    });

    app.get("/fetchInfo", function(req, res) {
        var code = req.query.code;
        var appid = "wxb8617df391f435cf";
        var secret = "36642be8cb1e45d5239c5e1d77d48824";
        if(code) {
            var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appid + "&secret=" + secret + "&code=" + code + "&grant_type=authorization_code";
            request.get(url, function(err, response, body) {
                console.log(response, body);
            })
        }
        res.end();
    });

    app.get("/fetchToken", function(req, res) {
        var token = req.query.token;
        res.send("993162337");
        res.end();
    });
}

exports.handleRoute = handleRoute
