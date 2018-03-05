var data=[
		{ind:1,h2:'h2',h3:'h3'},
		{ind:2,h2:'h2',h3:'h3'},
		{ind:3,h2:'h2',h3:'h3'},
		{ind:4,h2:'h2',h3:'h3'},
		{ind:5,h2:'h2',h3:'h3'},
		{ind:6,h2:'h2',h3:'h3'},
	];

	var g=function(id){
		return document.getElementById(id);
	}
	/*添加幻灯片*/
	function addppt(){
		/*获取模板*/
		var p_main=g('ppt_main').innerHTML.replace(/^\s+/g,'').replace(/\s+$/g,'');
		var p_ctrl=g('ppt_ctrl').innerHTML.replace(/^\s+/g,'').replace(/\s+$/g,'');
		
		var out_main=[];
		var out_ctrl=[];

		for(var i in data){

			var html_main=p_main.replace(/{{index}}/g,data[i].ind).replace(/{{h2}}/,data[i].h2).replace(/{{h3}}/,data[i].h3);
			var html_ctrl=p_ctrl.replace(/{{index}}/g,data[i].ind);
			out_main.push(html_main);
			out_ctrl.push(html_ctrl);
		}

		/*把HTML回写到对应的div中*/
		g('ppt_main').innerHTML=out_main.join('');
		g('ppt_ctrl').innerHTML=out_ctrl.join('');
	}

	/*幻灯片切换*/
	function switchPPT(n){
		var main=g('main_'+n);
		var ctrl=g('ctrl_'+n);
		/*先清除其余的active标签*/
		var mains=document.getElementsByClassName('main_i');
		var ctrls=document.getElementsByClassName('ctrl_i');
		for(var i=0;i<mains.length;i++){
			mains[i].className='main_i';
		}
		for(var i=0;i<ctrls.length;i++){
			ctrls[i].className='ctrl_i';
		}
		main.className+=' main_i_active';
		ctrl.className+=' ctrl_i_active';
	}

	window.onload=function(){
		addppt();
		switchPPT(1);
	}