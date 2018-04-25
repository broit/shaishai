Ext.define('Admin.view.sys.djsj.GridToolbar', {
	extend: 'Admin.view.common.GridToolbar',
	// disableAdd: true, //去掉添加按钮
	// disableModify: true, //去掉修改按钮
	// disableRemove: true, //去掉删除按钮
	xtype: 'djsjGridToolbar',
	func: 'djsj',//所属功能编码
	buttons: [
		{
		    text: '保存',//支付之前
		    oper: 'modify',
		    listeners: {
		        click: 'djsjSave'
		    }
		}
	]
});