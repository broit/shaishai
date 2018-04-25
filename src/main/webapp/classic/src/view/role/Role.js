Ext.define('Admin.view.role.Role', {
    extend: 'Admin.view.common.Container',

    requires: [
        'Admin.view.role.RoleSearchField',
        'Admin.view.role.RoleList',
        'Admin.view.role.RoleForm',
        'Admin.model.role.RoleModel',
        'Admin.view.role.RoleViewModel',
        'Admin.view.role.RoleController',
        'Admin.view.role.RoleGridToolbar'
    ],

    controller: 'roleController',

    viewModel: {
        type: 'roleViewModel'
    },
    items:[
        { 
            xtype: 'roleSearchField'
        },
        {
            xtype: 'roleList',
            flex: 1
        }
    ]
});
