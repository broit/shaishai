Ext.define('Admin.view.sys.admin.ViewModel', {
    extend: 'Admin.model.BaseViewModel',
    alias: 'viewmodel.adminViewModel',

    data: {
        //模块名称
        funcName: '功能管理',
    	//主键列名
    	idColumn: 'id',
    	//列表reference名
    	grid: 'adminListGrid',
    	
	    //添加表单
	    addForm: 'Admin.view.sys.admin.Form',
	    
	    //修改表单
	    modifyForm: 'Admin.view.sys.admin.Form',
	    
	    //删除地址
	    removeUrl: '/sys/admin/remove/'
    },
    
    stores:{
    	//列表store
    	gridStore: {
    		pageSize: '{pageSize}',
    		model: 'sys.admin.Model',
		    // storeId: 'userStore',
		    autoLoad: true,
		    method: 'GET',
		    proxy: {
		        type: 'ajax',
		        url: '/sys/admin/list.action',
		        reader: {
		            type: 'json',
		            rootProperty: 'rows',
		            totalProperty: 'count'
		        }
		    }
    	}
        //,funcStore: {
            //Store reference
        //    type: 'sysmall.sysmallStore'
        //}
    }
});