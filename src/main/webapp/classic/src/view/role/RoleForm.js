Ext.define('Admin.view.role.RoleForm', {
	extend: 'Admin.view.common.Form',
	controller : 'roleController',
    width: 380,
    height: 340,
	title: '角色信息',
    idColumn: 'roleUid',//主键列名
    //保存添加url
    addUrl: '/role/save.action',
    //加载表单地址
    loadUrl: '/role/',
    //修改地址
    modifyUrl: '/role/save.action',
	items:[
        {
            xtype: 'form',
            defaultType: 'textfield',
            bodyBorder: false,
    		bodyPadding: 15,
            reference: 'RoleForm',
            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                anchor: '100%'
            },
            items:[
                {
                    xtype: 'hiddenfield',
                    name: 'roleUid'
                },
                {
                    emptyText : '角色名',
                    name: 'roleName',
                    allowBlank: false
                },
                {
                    emptyText : '备注',
                    name: 'roleRemark'
                }
            ]
        }
    ]
});