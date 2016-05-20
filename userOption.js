var request = require("request"),
    qs = require("querystring");
var token;

function adjustUser() {
    var url = "https://api.weixin.qq.com/cgi-bin/token";
    var data = {
        grant_type: "client_credential",
        appid: "wxb8617df391f435cf",
        secret: "36642be8cb1e45d5239c5e1d77d48824",
    }

    request.post({url: url, form: data}, function(err, res, body) {
        var result = JSON.parse(body).access_token;
        console.log("Token: " + result);
    })
}

function getBaseInfo() {
    var url = "https://open.weixin.qq.com/connect/oauth2/authorize";
    var data = {
        appid: "wxb8617df391f435cf",
        redirect_uri: "http://52.68.131.36:8080/base",
        response_type: "code",
        scope: "snsapi_base",
        state: "200#wechat_redirect"
    }

    request.post({url: url, form: data}, function(err, res, body) {
        console.log(body);
        var result = JSON.parse(body).openid;
        console.log("OpenID: " + result);
    })
}

exports.adjustUser = adjustUser
exports.getBaseInfo = getBaseInfo
