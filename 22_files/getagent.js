    var trident=navigator.userAgent.indexOf('Trident') > -1,
        presto=navigator.userAgent.indexOf('Presto') > -1,
        webKit=navigator.userAgent.indexOf('AppleWebKit') > -1,
        gecko=navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1,
        mobile= !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
        ios= !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android= navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
        iPhone= navigator.userAgent.indexOf('iPhone') > -1,
        iPad= navigator.userAgent.indexOf('iPad') > -1,
        webApp= navigator.userAgent.indexOf('Safari') == -1,
        isWeibo= navigator.userAgent.toLowerCase().match(/WeiBo/i) == "weibo",
        isWechat= navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger",
        isQQ= navigator.userAgent.toLowerCase().match(/QQ/i) == "qq";