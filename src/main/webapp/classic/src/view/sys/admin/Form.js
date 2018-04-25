Ext.define('Admin.view.sys.admin.Form', {
	extend: 'Admin.view.common.Form',
    controller : 'adminController',
    width: 500,
    height: 650,
	title: '商城管理',
    idColumn: 'id',//主键列名
    //保存添加url
    addUrl: '/sys/admin/save.action',
    //加载表单地址
    loadUrl: '/sys/admin/',
    //修改地址
    modifyUrl: '/sys/admin/save.action',
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
                    emptyText : '用户编号',
                    fieldLabel: '用户编号<font color=red>*</font>',
                    name: 'acode',
                    allowBlank: false
                },
                {
                    emptyText : '用户名称',
                    fieldLabel : '用户名称<font color=red>*</font>',
                    name: 'aname',
                    allowBlank: false
                },
                {
                    emptyText : '登录密码',
                    fieldLabel : '登录密码',
                    name: 'apassword'
                },                
                {
                    emptyText : '财务密码',
                    fieldLabel : '财务密码',
                    name: 'apassword2'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '类型',
                    editable: false,
                    name: 'atype',
                    displayField: 'text',
                    valueField: 'value',
                    queryMode: 'local',
                    store: {
                        type: 'sys.admin.AdminType'
                    }
//                	,
//                    listeners: {
//                        change: 'from_onLoadAtype'
//                    }
                },
                {
                    fieldLabel : '所属商城',
                    name: 'mallId',
                    xtype: 'combobox',
                    fieldLabel: '所属商城',
                    editable: true,
                    displayField: 'mname',
                    valueField: 'id',
                    queryMode: 'local',
                    store: {
                        type: 'mall.MallByLogin'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '所属仓库',
                    editable: true,
                    name: 'storeId',
                    displayField: 'sname',
                    valueField: 'id',
                    queryMode: 'local',
                    store: {
                        type: 'str.StrList'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '启用状态',
                    editable: false,
                    name: 'alock',
                    displayField: 'text',
                    valueField: 'value',
                    queryMode: 'local',
                    store: {
                        type: 'common.Status'
                    }
                },
                {
                    emptyText : 'U盾授权码',
                    fieldLabel : 'U盾授权码',
                    name: 'keySqm' 
                },
                {
                    emptyText : 'U盾标识码',
                    fieldLabel : 'U盾标识码',
                    name: 'keyBsm' 
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '是否验证UKey',
                    name: 'isKey',
                    displayField: 'text',
                    valueField: 'value',
                    queryMode: 'local',
                    value:'0',
                    store: {
                        type: 'sys.admin.Key'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '所属供应商',
                    reference: 'supplierId',
                    queryMode: 'remote',
                    queryParam: 'name',
                    allowBlank: true,
                    forceSelection: true,
                    minChars: 1,
                    displayField: 'supplierName',
                    valueField: 'id',
                    store: {
                        type: 'sys.admin.Supplier'
                    },
                    name: 'supplierId'
                }
//                ,
//                {
//                    emptyText : '创建时间',
//                    fieldLabel : '创建时间',
//                    name: 'datetime'//,
//                    //allowBlank: false
//                }
               
            ]
        }
    ]
	,from_onLoadAtype:function(){
		alert();
	}
    ,showAddCallback: function(){
        var me = this;
        var form = this.down('form').getForm();
        form.findField("mallId").getStore().reload();
        form.findField("storeId").getStore().reload();
    }
    ,loadCallback: function(form,response){
         form.findField("storeId")
             .getStore()
             .loadData(response.result.data.strInfoList);
    	form.findField("mallId")
    		.getStore()
    		.loadData(response.result.data.sysmallList);
        form.findField("supplierId")
            .getStore()
            .loadData(response.result.data.supplierList);
         form.findField("storeId").setValue(response.result.data.storeId);
         form.findField("mallId").setValue(response.result.data.mallId);
        form.findField("supplierId").setValue(response.result.data.supplierId);
    },
    onSave:function(btn) {
        var win = btn.up('window');
        var currentView = win.getController().getViewModel().getData().currentView;
        if (win) {
            var form = win.down('form').getForm();
            if (form && form.isValid()) {
                var id= form.findField("id").getValue();
                if(id){
                    form.submit({
                        url: win.addUrl || win.modifyUrl,
                        waitMsg: '正在提交数据',
                        waitTitle: '提示',
                        method: "POST",
                        submitEmptyText: false,
                        success: function (form, action) {
                            if (action.result.success) {
                                var grid = currentView.lookupReference(currentView.getViewModel().getData().grid);
                                grid.getStore().reload();
                                if (win.saveCallback) {
                                    win.saveCallback(form, action);
                                }
                                win.close();
                            } else {
                                Ext.MessageBox.show({
                                    title: '提示',
                                    msg: '保存失败：' + action.result.msg,
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.ERROR
                                });
                            }
                        },
                        failure: function (form, action) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '保存失败：' + action.result.msg,
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    });
                }else{
                    var apassword= form.findField("apassword").getValue();
                    var apassword2= form.findField("apassword2").getValue();
                    if(apassword!=""&&apassword!=null&&apassword2!=""&&apassword2!=null){
                        form.submit({
                            url: win.addUrl || win.modifyUrl,
                            waitMsg: '正在提交数据',
                            waitTitle: '提示',
                            method: "POST",
                            submitEmptyText: false,
                            success: function (form, action) {
                                if (action.result.success) {
                                    var grid = currentView.lookupReference(currentView.getViewModel().getData().grid);
                                    grid.getStore().reload();
                                    if (win.saveCallback) {
                                        win.saveCallback(form, action);
                                    }
                                    win.close();
                                } else {
                                    Ext.MessageBox.show({
                                        title: '提示',
                                        msg: '保存失败：' + action.result.msg,
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                            },
                            failure: function (form, action) {
                                Ext.MessageBox.show({
                                    title: '提示',
                                    msg: '保存失败：' + action.result.msg,
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.ERROR
                                });
                            }
                        });
                    }else{
                        Ext.MessageBox.show({
                            title: '提示',
                            msg: '请设置登陆密码和财务密码！',
                            buttons: Ext.MessageBox.OK,
                            icon: Ext.MessageBox.ERROR
                        });
                    }
                }
                // form.submit({
                //     url: win.addUrl || win.modifyUrl,
                //     waitMsg: '正在提交数据',
                //     waitTitle: '提示',
                //     method: "POST",
                //     submitEmptyText: false,
                //     success: function (form, action) {
                //         if (action.result.success) {
                //             var grid = currentView.lookupReference(currentView.getViewModel().getData().grid);
                //             grid.getStore().reload();
                //             if (win.saveCallback) {
                //                 win.saveCallback(form, action);
                //             }
                //             win.close();
                //         } else {
                //             Ext.MessageBox.show({
                //                 title: '提示',
                //                 msg: '保存失败：' + action.result.msg,
                //                 buttons: Ext.MessageBox.OK,
                //                 icon: Ext.MessageBox.ERROR
                //             });
                //         }
                //     },
                //     failure: function (form, action) {
                //         Ext.MessageBox.show({
                //             title: '提示',
                //             msg: '保存失败：' + action.result.msg,
                //             buttons: Ext.MessageBox.OK,
                //             icon: Ext.MessageBox.ERROR
                //         });
                //     }
                // });
            }
        }
    }
});