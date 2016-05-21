$(function() {
    $.ajax({
        url: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb8617df391f435cf&redirect_uri=http://127.0.0.1/fetchInfo&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect",
        type: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        success: function(d) {
            console.log("Response content: " + d);
            $.post("127.0.0.1/fetchInfo", d)
        },
    })
})
