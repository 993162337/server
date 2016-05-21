var request = require("request"),
    qs = require("querystring");

exports.fetchUserInfo = function () {
    var url = "https://open.weixin.qq.com/connect/oauth2/authorize";
    var data = {
        appid: "wxb8617df391f435cf",
        redirect_uri: "http%3A%2F%2F52.68.131.36%3A3000%2FfetchInfo",
        response_type: "code",
        scope: "snsapi_base",
        state: "200#wechat_redirect"
    }

    request.post({url: url, form: data}, function(err, res, body) {
        var result = JSON.parse(body).openid;
        console.log("OpenID: " + result);
    })
}
