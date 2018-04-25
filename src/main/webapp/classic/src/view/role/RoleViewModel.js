Ext.define('Admin.view.role.RoleViewModel', {
    extend: 'Admin.model.BaseViewModel',
    alias: 'viewmodel.roleViewModel',

    data: {
    	//模块名称
    	funcName: '角色管理',
    	//主键列名
    	idColumn: 'roleUid',
    	//列表reference名
    	grid: 'roleListGrid',
	    //添加表单
	    addForm: 'Admin.view.role.RoleForm',
	    //修改表单
	    modifyForm: 'Admin.view.role.RoleForm',
	    //删除地址
	    removeUrl: '/role/remove/'
    },
    
    stores:{
    	//列表store
    	gridStore: {
    		pageSize: '{pageSize}',
    		model: 'Admin.model.role.RoleModel',
		    storeId: 'roleStore',
		    autoLoad: true,
		    method: 'GET',
		    proxy: {
		        type: 'ajax',
		        url: '/role/list.action',
		        reader: {
		            type: 'json',
		            rootProperty: 'rows',
		            totalProperty: 'count'
		        }
		    }
    	}
    }
});