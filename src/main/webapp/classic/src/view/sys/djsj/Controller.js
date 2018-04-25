Ext.define('Admin.view.sys.djsj.Controller', {
    extend: 'Admin.view.common.Controller',

    alias: 'controller.djsjController',
    beforeContainerActive:function(){
    },
    afterlayoutContainer:function(){
    	this.InitLodop();
    	this.DisplayDesign();
    },
    InitLodop:function(){
		LODOP=getLodop(document.getElementById('LODOP_DESIGN'),document.getElementById('LODOP_EM_DESIGN')); 
		LODOP.PRINT_INIT("");               //首先一个初始化语句
//		LODOP.ADD_PRINT_TEXT(0,0,100,20,"文本内容一");//然后多个ADD语句及SET语句
	},
	//显示设计窗口
	DisplaySetup:function(){		
		LODOP.SET_SHOW_MODE("SETUP_IN_BROWSE",1);
		LODOP.SET_SHOW_MODE("MESSAGE_NOSET_PROPERTY",'不能设置属性，请用打印设计(本提示可修改)！');
		LODOP.PRINT_SETUP();		
	},
	DisplayDesign:function(){		
		LODOP.SET_SHOW_MODE("DESIGN_IN_BROWSE",1);
		LODOP.SET_SHOW_MODE("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
		LODOP.SET_SHOW_MODE("HIDE_GROUND_LOCK",true);//隐藏纸钉按钮
		LODOP.PRINT_DESIGN();		
	},
    
    
	combobox_djsj_select:function(combo, record,eOpts ){
		var me = this;
    	//清空设计模板
		LODOP.SET_PRINT_STYLEA('All','Deleted',true);
		LODOP.PRINT_INIT("");
		 
		var lx = record.get('value');
		var lxText = record.get('text');
		
		//alert(lx+"----"+lxText);
		if(lx==null || lx=='')
			return;
		
//		ns.form.form('clear');
//		ns.init_form();
//		ns.form.form('load', sys.djsj.URL_LOADBYLB+lx);
		
		
		Ext.Ajax.request({
	          url: "/sys/djsj/loadByLb.action",
	          params: {
	        	  lx: lx
	          },
	          callback:function(options,success,response){
	              var responseData = Ext.decode(response.responseText);
	             
	              if(responseData!=null){
	            	 // alert(responseData.mb)
	            	  
	            	  try{	
	      				//加载打印模板
	      				eval(responseData.mb);
	      			}catch(err){
	      				
	      			}
	      			me.DisplayDesign();
	              }
	          }
	    	});
		
    },
    djsjSave: function(){
    	var lx = Ext.getCmp('sys_djsj_search_id').getValue();
    	var mb = LODOP.GET_VALUE("ProgramCodes",0);
    	
    	Ext.Ajax.request({
	          url: "/sys/djsj/save.action",
	          params: {
	        	  lx: lx,
	        	  mb: mb
	          },
	          callback:function(options,success,response){
	              var responseData = Ext.decode(response.responseText);
	              if(responseData!=null){
	            	  if(responseData.success){
	            		  alert("保存成功！") 
	            	  }else{
	            		  alert(responseData.msg)
	            	  }
	              }
	          }
	    });
    }
});