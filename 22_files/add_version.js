//给css,js添加版本号,解决浏览器缓存问题
function add_v(type,src){
	if(type == 'css'){
		document.write('<link rel="stylesheet" type="text/css" href="'+ src +'?='+ parseInt(Math.random()*10000*10000) +'"/>'); 
	}else if(type == 'js'){
		document.write('<script src="'+ src +'?v='+ parseInt(Math.random()*10000*10000) +'" type="text/javascript" charset="utf-8"></script>'); 
	}
}