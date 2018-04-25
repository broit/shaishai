Ext.define('Admin.view.sys.djsj.ViewModel', {
    extend: 'Admin.model.BaseViewModel',
    alias: 'viewmodel.djsjViewModel',

    data: {
        //模块名称
        funcName: '交易',
    	//主键列名
    	idColumn: 'id',
    	//列表reference名
    	grid: 'djsjListGrid',
    	
	    //添加表单
	    addForm: 'Admin.view.sys.djsj.Form',
	    
	    //修改表单
	    modifyForm: 'Admin.view.sys.djsj.Form',
	    
	    //删除地址
	    removeUrl: '/sys/djsj/remove/'
    },
    
    stores:{
    	//列表store
//    	gridStore: {
//    		pageSizes: '{pageSize}',
//    		model: 'shop.trad.Model',
//		    // storeId: 'userStore',
//		    autoLoad: true,
//		    method: 'GET',
//		    proxy: {
//		        type: 'ajax',
//		        url: '/shop/trad/list.action',
//		        reader: {
//		            type: 'json',
//		            rootProperty: 'rows',
//		            totalProperty: 'count'
//		        }
//		    }
//    	}
        //,funcStore: {
            //Store reference
        //    type: 'sysmall.sysmallStore'
        //}
    }
});