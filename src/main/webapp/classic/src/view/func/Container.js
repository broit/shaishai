Ext.define('Admin.view.func.Container', {
    extend: 'Admin.view.common.Container',

    requires: [
        'Admin.store.func.Func',
        'Admin.view.func.SearchField',
        'Admin.view.func.List',
        'Admin.view.func.GridToolbar',
        'Admin.view.func.Form',
        'Admin.view.func.ViewModel',
        'Admin.view.func.Controller',
        'Admin.model.func.Model'
    ],

    viewModel: {
        type: 'funcViewModel'
    },

    controller: 'funcController',

    items:[
        {
            xtype: 'funcSearchField'
        },
        {
            xtype: 'funcList',
            flex: 1
        }
    ]
});
