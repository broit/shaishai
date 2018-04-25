Ext.define('Admin.view.oper.ViewModel', {
    extend: 'Admin.model.BaseViewModel',
    alias: 'viewmodel.operViewModel',

    data: {
        //模块名称
        funcName: '操作管理',
    	//列表reference名
    	grid: 'operListGrid',
    	
	    //添加表单
	    addForm: 'Admin.view.oper.Form',
	    
	    //修改表单
	    modifyForm: 'Admin.view.oper.Form',
	    
	    //删除地址
	    removeUrl: '/oper/remove/'
    },
    
    stores:{
    	//列表store
    	gridStore: {
    		pageSize: '{pageSize}',
    		model: 'oper.Model',
		    // storeId: 'userStore',
		    autoLoad: true,
		    method: 'GET',
		    proxy: {
		        type: 'ajax',
		        url: '/oper/list.action',
		        reader: {
		            type: 'json',
		            rootProperty: 'rows',
		            totalProperty: 'count'
		        }
		    }
    	}
    }
});