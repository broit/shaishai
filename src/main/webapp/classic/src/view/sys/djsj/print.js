$(window).load(function(){

	var ns = sys.djsj;
	ns.form = $('#sys-djsj-form');
	
	$('#sys-djsj-form-lx').combobox({
		onChange: function(param){
			sys.djsj.selectLx();
		}
	});
	
	ns.reload = function()
	{
		eval(ns.form.find('input[name=mb]').val());
		ns.DisplayDesign();
	};
	
	//打印设计初始化
	var LODOP = null;
	ns.InitLodop = function()
	{
		LODOP=getLodop(document.getElementById('LODOP_DESIGN'),document.getElementById('LODOP_EM_DESIGN')); 
		LODOP.PRINT_INIT("");               //首先一个初始化语句
//		LODOP.ADD_PRINT_TEXT(0,0,100,20,"文本内容一");//然后多个ADD语句及SET语句
	};
	//显示设计窗口
	ns.DisplaySetup = function()
	{		
		LODOP.SET_SHOW_MODE("SETUP_IN_BROWSE",1);
		LODOP.SET_SHOW_MODE("MESSAGE_NOSET_PROPERTY",'不能设置属性，请用打印设计(本提示可修改)！');
		LODOP.PRINT_SETUP();		
	};
	ns.DisplayDesign = function()
	{		
		LODOP.SET_SHOW_MODE("DESIGN_IN_BROWSE",1);
		LODOP.SET_SHOW_MODE("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
		LODOP.SET_SHOW_MODE("HIDE_GROUND_LOCK",true);//隐藏纸钉按钮
		LODOP.PRINT_DESIGN();		
	};
	ns.InitLodop();
	ns.DisplayDesign();
	
	ns.init_form = function()
	{

	};
	
	//选择
	ns.selectLx = function()
	{
		//清空设计模板
		LODOP.SET_PRINT_STYLEA('All','Deleted',true);
		LODOP.PRINT_INIT("");
		 
		var lx = $('#sys-djsj-form-lx').combobox('getValue');
		var lxText = $('#sys-djsj-form-lx').combobox('getText');
		if(lx==null || lx=='')
			return;
		
		ns.form.form('clear');
		ns.init_form();
		ns.form.form('load', sys.djsj.URL_LOADBYLB+lx);
	};
	
	ns.form.form({onLoadSuccess: 
		function(data){
			try{	
				//加载打印模板
				eval(data.mb);
			}catch(err){
				
			}
			ns.DisplayDesign();
		}
	});
	
	//编辑
	ns.edit = function(id)
	{
		$('#sys-djsj-dialog').modal( "show" );
		ns.form.form('clear');
		ns.init_form();
		ns.form.form('load', sys.djsj.URL_LOAD+id);
	};
	
	//保存
	ns.save = function()
	{
		var valid = ns.form.form('validate');
		if(!valid)
			return;
		
		var code = LODOP.GET_VALUE("ProgramCodes",0);
		ns.form.find('input[name=mb]').val(code);

		$.ajax({
		    url: sys.djsj.URL_SVAE,
		    type: 'POST',
		    data: ns.form.serialize(),
		    success: function(data) {
				if(data.success){
					alert("保存成功！");
            	 }else{
            		 alert(data.msg);
            	 }
		    }
		 });
	};
});