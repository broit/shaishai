Ext.define('Admin.view.func.GridToolbar', {
	extend: 'Admin.view.common.GridToolbar',
	// disableAdd: true, //去掉添加按钮
	// disableModify: true, //去掉修改按钮
	// disableRemove: true, //去掉删除按钮
	xtype: 'funcGridToolbar',
	func: 'func',//所属功能编码
	buttons: [
		{
            text: '功能操作',
            oper: 'funcOper',//操作编码
            listeners: {
                click: 'onFuncOper'
            }
        }
	]
});