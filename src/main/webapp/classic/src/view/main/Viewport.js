Ext.define('Admin.view.main.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',
    id:'mainviewport',
    requires: [
        'Ext.list.Tree',
        'Admin.view.main.MainContainerWrap',
        'Admin.view.main.ViewportController',
        'Admin.view.main.ViewportModel'
    ],

    controller: 'mainviewport',
    viewModel: {
        type: 'mainviewport'
    },

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="/assets/img/sencha-icon.png">云商城</div>',
                    width: 220
                },
                {
                    margin: '0 0 0 8',
                    cls: 'delete-focus-bg',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                {
                    xtype: 'tbspacer',
                    flex: 1
                },
//                {
//                    cls: 'delete-focus-bg',
//                    iconCls:'x-fa fa-search',
//                    href: '#search',
//                    hrefTarget: '_self',
//                    tooltip: 'See latest search'
//                },
//                {
//                    cls: 'delete-focus-bg',
//                    iconCls:'x-fa fa-envelope',
//                    href: '#email',
//                    hrefTarget: '_self',
//                    tooltip: 'Check your email'
//                },
//                {
//                    cls: 'delete-focus-bg',
//                    iconCls:'x-fa fa-bell'
//                },
//                {
//                    cls: 'delete-focus-bg',
//                    iconCls:'x-fa fa-th-large',
//                    href: '#profile',
//                    hrefTarget: '_self',
//                    tooltip: 'See your profile'
//                },
                {
                    cls: 'delete-focus-bg',
                    iconCls:'x-fa fa-edit',
                    text:'修改密码 ',
                    listeners: {
                        click: 'onChangePassword'
                    }
                },
                {
                    xtype: 'tbtext',
                    text: Ext.uname,
                    cls: 'top-user-name'
                },
                {
                    cls: 'delete-focus-bg',
                    iconCls:'x-fa fa-info',
                    text: '退出',
                    href: '/exit.action',
                    hrefTarget: '_self'
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    src: '/assets/img/2.png'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'UserAuth',
                    width: 220,
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: true,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                    ,onNodeCollapse: function (node) {
                        var item = this.itemMap[node.internalId];
                        if (item) {
                            item.nodeCollapse(node, false);
                        }
                    },
                    onNodeUpdate: function(){
                        this.updateIconSize(12);
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    },
                    listeners:{
                        add: 'onAdd'
                    }
                }
            ]
        }
    ]
});
