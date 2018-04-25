Ext.define('Admin.view.oper.SearchField', {
	xtype: 'operSearchField',
	extend: 'Admin.view.common.SearchField',
	// disableSearch: true,//是否不自动添加'查询'按钮
	items: [
        {
            xtype: 'textfield',
            name: 'operName',
            width: 120,
            hideLabel: true,
            emptyText: '名称'
        },
        {
            xtype: 'textfield',
            name: 'operCode',
            style: 'margin-left:10px',
            width: 120,
            hideLabel: true,
            emptyText: '编码'
        }
	]
});