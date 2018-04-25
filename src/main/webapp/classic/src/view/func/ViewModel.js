Ext.define('Admin.view.func.ViewModel', {
    extend: 'Admin.model.BaseViewModel',
    alias: 'viewmodel.funcViewModel',

    data: {
        //模块名称
        funcName: '功能管理',
    	//主键列名
    	idColumn: 'funcUid',
    	//列表reference名
    	grid: 'funcListGrid',
    	
	    //添加表单
	    addForm: 'Admin.view.func.Form',
	    
	    //修改表单
	    modifyForm: 'Admin.view.func.Form',
	    
	    //删除地址
	    removeUrl: '/func/remove/'
    },
    
    stores:{
    	//列表store
    	gridStore: {
    		pageSize: '{pageSize}',
    		model: 'func.Model',
		    // storeId: 'userStore',
		    autoLoad: true,
		    method: 'GET',
		    proxy: {
		        type: 'ajax',
		        url: '/func/list.action',
		        reader: {
		            type: 'json',
		            rootProperty: 'rows',
		            totalProperty: 'count'
		        }
		    }
    	},funcStore: {
            //Store reference
            type: 'func.funcStore'
        }
    }
});