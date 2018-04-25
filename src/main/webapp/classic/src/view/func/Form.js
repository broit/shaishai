Ext.define('Admin.view.func.Form', {
	extend: 'Admin.view.common.Form',
    controller : 'funcController',
    width: 400,
    height: 490,
	title: '功能信息',
    idColumn: 'funcUid',//主键列名
    //保存添加url
    addUrl: '/func/save.action',
    //加载表单地址
    loadUrl: '/func/',
    //修改地址
    modifyUrl: '/func/save.action',
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
                    name: 'funcUid'
                },
                {
                    emptyText : '名称',
                    fieldLabel: '名称',
                    name: 'funcName',
                    allowBlank: false
                },
                {
                    emptyText : '编码',
                    fieldLabel : '编码',
                    name: 'funcCode',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '所属功能',
                    editable: false,
                    // emptyText : '所属功能',
                    name: 'funcParent',
                    displayField: 'funcName',
                    valueField: 'funcUid',
                    queryMode: 'local',
                    store: {
                        type: 'func.funcStore'
                    },
                    /*store: new Ext.data.ArrayStore({
                        model: 'Admin.model.func.Model'
                    }),*/
                    allowBlank: false
                },
                {
                    xtype: 'numberfield',
                    fieldLabel : '级别',
                    name: 'funcLevel'
                },
                {
                    emptyText : 'URL',
                    fieldLabel : 'URL',
                    name: 'funcUrl'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '图标预览',
                    bind: '<i class="x-fa {funcIcon.value}"></i>'
                },
                {
                    fieldLabel : '图标',
                    reference: 'funcIcon',
                    publishes: 'value',
                    name: 'funcImg'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel : '排序',
                    name: 'funcIserial'
                },
                {
                    emptyText : '备注',
                    fieldLabel : '备注',
                    name: 'funcRemark'
                }
            ]
        }
    ]
    ,showAddCallback: function(){
        var me = this;
        var form = this.down('form').getForm();
        form.findField("funcParent").getStore().reload();
    }
    ,loadCallback: function(form,response){
        form.findField("funcParent")
            .getStore()
            .loadData(response.result.data.otherFuncs);
        form.findField("funcParent").setValue(response.result.data.funcParent);
    }
});