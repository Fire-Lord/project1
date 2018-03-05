var $=require("jquery");
var popup=function(){
	var div=document.createElement('div');
	div.innerHTML='<div class="dialog-mask"></div>'+
      '<div class="dialog" id="dialog">'+
      '<div class="dialog-title" id="dialog_tit">'+
        '登录通行证'+
        '<a class="dialog-close"><img src="img/close.png"/></a>'+
      '</div>'+
      
      '<div class="dialog-content">'+
        '<input class="dialog-input dialog-input-username" type="input" value="手机/邮箱/用户名" />'+'<input class="dialog-input dialog-input-password" type="input" value="密码" />'+
        '<div>'+
        '<a class="dialog-submit" href="#">登录</a>'+
        '</div>'+
      '</div>'+
    '</div>';

    var bod=document.getElementsByTagName('body')[0];
    bod.appendChild(div);

    //下面是js代码
    var close=document.getElementsByClassName('dialog-close')[0];
    close.onclick=function(){
    	bod.removeChild(div);
    }
    function g(name){
      return document.getElementById(name);
    }
    var obj=g('dialog');
    var mousex=0;
    var mousey=0;
    var flag=false;
    obj.style.left=(document.documentElement.clientWidth-obj.offsetWidth)/2+'px';
    obj.style.top=(document.body.clientHeight-obj.offsetHeight)/2+'px';

    g('dialog_tit').addEventListener('mousedown',function(e){
        var e=e || window.event;
        mousex=e.pageX-obj.offsetLeft;
        mousey=e.pageY-obj.offsetTop;
        
        flag=true;
    },false);

    document.onmousemove=function(e){
        var e=e || window.event;
        var objleft=0;
        var objtop=0;
        if(flag===true){
          objleft=e.pageX-mousex;
          objtop=e.pageY-mousey;
          var maxx=document.documentElement.clientWidth-obj.offsetWidth;
          
          objleft=Math.min(Math.max(0,objleft),maxx);

          var maxy=document.documentElement.clientHeight-obj.offsetHeight;
          
          objtop=Math.min(Math.max(0,objtop),maxx);
          
          obj.style.left=objleft+'px';
          obj.style.top=objtop+'px';
          
        }
    }

    document.onmouseup=function(){
      flag=false;
    }
};



module.exports=popup;