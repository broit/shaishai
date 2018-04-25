Ext.define('Admin.view.oper.Form', {
	extend: 'Admin.view.common.Form',
    controller : 'operController',
    width: 400,
    height: 390,
	title: '操作信息',
    //保存添加url
    addUrl: '/oper/save.action',
    //加载表单地址
    loadUrl: '/oper/',
    //修改地址
    modifyUrl: '/oper/save.action',
	items:[
        {
            xtype: 'form',
            defaultType: 'textfield',
            bodyBorder: false,
    		bodyPadding: 15,
            defaults: {
                labelWidth: 90,
                labelAlign: 'left',
                labelSeparator: '：',
                submitEmptyText: false,
                anchor: '100%'
            },
            items:[
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    emptyText : '名称',
                    fieldLabel: '名称',
                    name: 'operName',
                    allowBlank: false
                },
                {
                    emptyText : '编码',
                    fieldLabel : '编码',
                    name: 'operCode',
                    allowBlank: false
                }
            ]
        }
    ]
});