Ext.define('Admin.view.sys.admin.SearchField', {
	xtype: 'adminSearchField',
	extend: 'Admin.view.common.SearchField',
	// disableSearch: true,//是否不自动添加'查询'按钮
	items: [
        {
            xtype: 'textfield',
            name: 'acode',
            width: 120,
            hideLabel: true,
            emptyText: '编号'
        },
        {
            xtype: 'textfield',
            name: 'aname',
            width: 120,
            hideLabel: true,
            emptyText: '姓名'
        },
        {
            xtype: 'combobox',
            emptyText: '所属商城',
            editable: false,
            name: 'mallId',
            displayField: 'mname',
            valueField: 'id',
            queryMode: 'local',
            store: {
                type: 'mall.MallByLogin',
                autoLoad : true
            }
        },
        {
            xtype: 'combobox',
            emptyText: '所属仓库',
            editable: false,
            name: 'storeId',
            displayField: 'sname',
            valueField: 'id',
            queryMode: 'local',
            store: {
                type: 'str.storeinfo.StrByLogin',
                autoLoad : true
            }
        }
	]
});