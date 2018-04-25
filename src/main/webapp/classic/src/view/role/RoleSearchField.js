Ext.define('Admin.view.role.RoleSearchField', {
	xtype: 'roleSearchField',
	extend: 'Admin.view.common.SearchField',
	// disableSearch: true,//是否不自动添加'查询'按钮
	items: [
        {
            xtype: 'textfield',
            name: 'roleName',
            width: 120,
            hideLabel: true,
            emptyText: '角色名'
        }
	]
});