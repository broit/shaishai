Ext.define('Admin.view.sys.admin.Container', {
    extend: 'Admin.view.common.Container',

    requires: [
        'Admin.view.sys.admin.SearchField',
        'Admin.view.sys.admin.List',
        'Admin.view.sys.admin.GridToolbar',
        'Admin.view.sys.admin.Form',
        'Admin.view.sys.admin.ViewModel',
        'Admin.view.sys.admin.Controller',
        'Admin.view.sys.admin.AdminRole',
        'Admin.model.sys.admin.Model',
        'Admin.store.common.Status',
        'Admin.store.sys.admin.AdminType',
        'Admin.store.sys.admin.Key'
    ],

    viewModel: {
        type: 'adminViewModel'
    },

    controller: 'adminController',

    items:[
        {
            xtype: 'adminSearchField'
        },
        {
            xtype: 'adminList',
            flex: 1
        }
    ]
});
