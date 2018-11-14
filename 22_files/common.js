/**
 * 浏览器+设备终端检测
 * @author lpg
 */

//移动端检测
var isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)

//设备系统检测
var isiPad = /iPad/i.test(navigator.userAgent);//ipad
var isiPhone = /iPhone|iPod/i.test(navigator.userAgent);//iphone
var isAndroid = /ndroid/i.test(navigator.userAgent);//android
var isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(navigator.userAgent)//IOS
var isWechat = /MicroMessenger/i.test(navigator.userAgent);//wechat
var isQQ = /QQ/i.test(navigator.userAgent);//QQ
var isWeibo = /Weibo/i.test(navigator.userAgent);//weibo

//浏览器检测
var isQQBro = /MQQBrowser/i.test(navigator.userAgent)//QQ浏览器
var isUCBro = /UCBrowser/i.test(navigator.userAgent)//UC浏览器
var isChrome = /Chrome\/([\d\.]+)/i.test(navigator.userAgent)//Chrome
var isFireFox = /Firefox\/([\d\.]+)/i.test(navigator.userAgent)//FireFox
var isIE = navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1 && !isOpera//IE
var isSafari = /Safari/i.test(navigator.userAgent)//Safari
var isOpera = /Opera/i.test(navigator.userAgent)//Opera
var isMaxthon = navigator.userAgent.indexOf("Maxthon") > -1//遨游broswer


window.GetAppDowUrl= "http://www.baidu.com";


if( window.navigator.platform == 'Win32'){
  window.location.href = 'http://www.baidu.com';
}


$(function(){
     LoadJs("http://public-cdn.jiedianr.cn/common/tongji.js?v=1026-2");
	 $(".download").click(function(){
		 if(isWechat) {
			if (isIOS) {
                  AjaxIosDowApp();
			}else{
                 window.location.href = 'http://' + location.host + '/dowApp?downurl=' + window.location.href;
            }
		 }else{
             if ( isiPhone ) {
                 AjaxIosDowApp(); 
             }else{
                 AjaxAndroidDowApp();
             }
		 }
	 });
});

function AjaxIosDowApp(){
  	alert('苹果手机上架中');
}


function LoadJs( JsSrc ){
    var oHead = document.getElementsByTagName('HEAD').item(0); 
    var oScript= document.createElement("script"); 
    oScript.type = "text/javascript"; 
    oScript.src= JsSrc; 
    oHead.appendChild( oScript); 
}


//toast等待弹窗
  //Toast('正在请求中...');
    function Toast(text, time) {
		var div1 = document.createElement('span');
		var div2 = document.createElement('div');
		//设置样式和属性
		div1.setAttribute('style', 'float:none;display:inline-block;background: rgba(0, 0, 0, 0.7);color: #fff;font-size:12px;padding:0.15rem 0.3rem;margin:0.5rem;border-radius:0.1rem;transform: translate(-50 %, -50 %);-webkit-transform: translate(-50 %, -50 %);-moz-transform: translate(-50 %, -50 %);-o-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);');
		div1.innerHTML = text;
		div2.setAttribute('style', 'text-align:center;position: fixed;top: 40%;left:0;right:0;z-index:999999;');
		div2.appendChild(div1);
		document.body.appendChild(div2);
		setTimeout(function() {
			div2.remove();
		}, time | 1000);
	}


function AjaxAndroidDowApp(){
    Toast('正在请求中...');
    //window.location.href = "http://app-api.jiedianr.cn:9095/miss/autoApk/getApk?channelCode=" + window.channelCode;
    
  
  window.tpl = window.tpl ? window.tpl : 1;

  var tjdata = {uid:  window.channelCode ,template_id: window.tpl,type:0 ,system: window.navigator.platform };
  
    tjdata.type = 1; // 点击下载记录

    
    MiaoJianTjAjax({
      data:tjdata,
    });
  
  
  document.getElementById('youriframe').src="http://app-api.jiedianr.cn:9095/miss/autoApk/getApk?channelCode="+window.channelCode;
  

}

window.api = "cp-1.jiedianr.cn";

		function MiaoJianTjAjax(obj) {
          
            var api = '/JsApi/index/count_template';
            var defaults = {
                type: 'get',
                data: {},
                url: api,
                dataType: 'text',
                async: true,
                success: function (data) {
                    console.log(data)
                }
            }
            for (var key in obj) {
                defaults[key] = obj[key]
            };
            var xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest()
            } else {
                xhr = new ActiveXObject('Microsoft.XMLHTTP')
            };
            var param = '';
            for (var attr in obj.data) {
                param += attr + '=' + obj.data[attr] + '&'
            }
            if (param) {
                param = param.substring(0, param.length - 1)
            }
            if (defaults.type == 'get') {
                defaults.url += '?' + encodeURI(param)
            }
            xhr.open(defaults.type, defaults.url, defaults.async);
            var data = null;
            if (defaults.type == 'post') {
                data = param;
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
            xhr.send(data);
          
          
          
            if (!defaults.async) {
                if (defaults.dataType == 'json') {
                    return JSON.parse(xhr.responseText)
                } else {
                    return xhr.responseText
                }
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var data = xhr.responseText;
                        if (defaults.dataType == 'json') {
                            data = JSON.parse(data)
                        }
                        defaults.success(data)
                    }
                }
            }
        }        







function isWeiXin(){
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
  return true;
  }else{
  return false;
  }
}


/**

if( isWeiXin() ){

      pushHistory(); 
      window.addEventListener("popstate", function(e) { 
            window.location.href = "http://t.cn/RdWnYdP";
      }, false); 
      function pushHistory() { 
        var state = { 
          title: "title", 
          url: "#"
        }; 
        window.history.pushState(state, "title", "#"); 
      }


}

**/


if(top!=self)top.location=self.location;


 
