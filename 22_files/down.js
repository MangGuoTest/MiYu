var _referer = document.referrer;
var _width = window.innerWidth;
var _height = window.innerHeight;
var _time = parseInt((new Date).getTime() / 1000);
var _url = window.location.href;
var theUrl = '';
var os = function () {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPad = /(?:iPad)/.test(ua),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
        isPad: isPad
    };
}();
var ua = navigator.userAgent.toLowerCase();
if (ua.match(/MicroMessenger/i) == "micromessenger") {
    // 是微信时
    if (os.isAndroid || os.isTablet) {
        // 安卓
        theUrl = 'http://tj.aipeng.com/down/android.php' + window.location.hash;
    } else if (os.isPad || os.isPhone) {
        // 苹果
        theUrl = 'http://tj.aipeng.com/down/ios.htm' + window.location.hash;
    } else {
        // 未知别成功
        theUrl = 'https://oss.aipengapp.com/app/yyb/爱碰_高颜值视频交友APP_1.1.2.apk';
    }
} else {
    // 非微信时
    if (os.isAndroid || os.isTablet) {
        // 安卓
        theUrl = 'https://oss.aipengapp.com/app/yyb/爱碰_高颜值视频交友APP_1.1.2.apk';
    } else if (os.isPad || os.isPhone) {
        // 苹果
      theUrl = 'http://tj.aipeng.com/down/ios-nowechat.htm' + window.location.hash;
    } else {
        // 未知别成功
        theUrl = 'https://oss.aipengapp.com/app/yyb/爱碰_高颜值视频交友APP_1.1.2.apk';
    }
}
function cbaa() {
    // if (_referer != '' && _referer != _url) {
    // } else { }
    // var url1 = "/STView.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
    // $.post(url1
    // , function (result) {
    // cookie_set("vread", 1);
    //alert('11');
    // return false;
    // });

}

function claa() {
    location.href = theUrl;
    // if (_referer != '' && _referer != _url) {
    // } else { }
    // var url1 = "/STClick.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
    // $.post(url1
    // , function (result) {
    // cookie_set("cread", 1);
    // location.href = theUrl;
    // return false;
    // });

}

function claalive() {
    var url1 = "/STClick.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
    $.post(url1, function (result) {
        cookie_set("cread", 1);
        location.href = theUrl;
        return false;
    });
}

function cookie_set(key, value) {
    var Then = new Date();
    var xdomain = "." + gettopdomain(document.location.href);
    Then.setTime(Then.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + "; path=/; domain=" + xdomain + "; expires=" + Then.toGMTString();
}

function gettopdomain(url) {
    url = url.replace(/http:\/\/.*?([^\.]+\.(com\.cn|org\.cn|net\.cn|[^\.]+))\/.+/, "$1") + "/test";
    url = url.split("/")[0];
    return url;
}

function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}