Ext.define('Admin.view.main.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
               {
                text: '系统管理',
                expanded: false,
                selectable: false,
                iconCls: 'x-fa fa-leanpub',
                routeId : 'sys-parent',
                id:       'sys-parent',
                children: [
                    {
                        text: '用户管理',
                        view: 'user.User',
                        iconCls: 'x-fa icon-user',
                        leaf:   true,
                        routeId:'user'
                    },
                    {
                        text:   '角色管理',
                        view:   'role.Role',
                        leaf:   true,
                        iconCls: 'x-fa icon-group',
                        routeId:'role'
                    },
                    {
                        text:   '功能管理',
                        view:   'func.Container',
                        leaf:   true,
                        iconCls: 'x-fa icon-th-list',
                        routeId:'func'
                    },
                    {
                        text:   '操作管理',
                        view:   'oper.Container',
                        leaf:   true,
                        iconCls: 'x-fa icon-hand-up',
                        routeId:'oper'
                    }
                ]
            },
            {
                text:   '物料管理',
                iconCls: 'right-icon x-fa fa-send ',
                expanded: false,
                selectable: false,
                routeId: 'wms',
                children: [
                            {
                                text: '原料管理',
                                view: 'material.Material',
                                iconCls: 'x-fa fa-bookmark',
                                leaf:   true,
                                routeId:'material'
                            }
                    ]

            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
