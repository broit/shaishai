Ext.define('Admin.view.sys.admin.GridToolbar', {
	extend: 'Admin.view.common.GridToolbar',
	// disableAdd: true, //去掉添加按钮
	// disableModify: true, //去掉修改按钮
	// disableRemove: true, //去掉删除按钮
	xtype: 'adminGridToolbar',
	func: 'admin',//所属功能编码
	buttons: [
		{
            text: '用户角色',
            oper: 'userRole',//操作编码
            listeners: {
                click: 'onUserRole'
            }
        },{
            text: '启用',
            oper: 'enable',//操作编码
            listeners: {
                click: 'enableUser'
            }
        },{
            text: '锁定',
            oper: 'disable',//操作编码
            listeners: {
                click: 'disableUser'
            }
        }
	]
});