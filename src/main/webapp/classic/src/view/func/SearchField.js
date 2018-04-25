Ext.define('Admin.view.func.SearchField', {
	xtype: 'funcSearchField',
	extend: 'Admin.view.common.SearchField',
	// disableSearch: true,//是否不自动添加'查询'按钮
	items: [
        {
            xtype: 'textfield',
            name: 'funcName',
            width: 120,
            hideLabel: true,
            emptyText: '名称'
        },
        {
            xtype: 'textfield',
            name: 'funcParentName',
            width: 120,
            hideLabel: true,
            emptyText: '父功能名称'
        }
	]
});