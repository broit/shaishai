Ext.define('Admin.view.oper.Container', {
    extend: 'Admin.view.common.Container',

    requires: [
        'Admin.view.oper.SearchField',
        'Admin.view.oper.List',
        'Admin.view.oper.GridToolbar',
        'Admin.view.oper.Form',
        'Admin.view.oper.ViewModel',
        'Admin.view.oper.Controller',
        'Admin.model.oper.Model'
    ],

    viewModel: {
        type: 'operViewModel'
    },

    controller: 'operController',

    items:[
        {
            xtype: 'operSearchField'
        },
        {
            xtype: 'operList',
            flex: 1
        }
    ]
});
