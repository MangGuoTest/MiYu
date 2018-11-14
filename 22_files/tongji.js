!(function(){
 window.tpl = window.tpl ? window.tpl : 1;
 var tjdata = {uid:  window.channelCode ,template_id: window.tpl,type:0 ,system: window.navigator.platform };
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
 MiaoJianTjAjax({
  data:tjdata,
 });
 var btn = document.getElementById("download");

 if(btn){
  btn.onclick=function(){
   tjdata.type = 1; // 点击下载记录
   MiaoJianTjAjax({
    data:tjdata,
   });
  }
 }else{
  btn = document.getElementByClassName("download");
  btn.forEach(function(obj){
   obj.onclick=function(){
    tjdata.type = 1; // 点击下载记录
    MiaoJianTjAjax({
     data:tjdata,
    });
   }
  })
 }
})(window.MiaoJianTj);