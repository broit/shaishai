Ext.define('Admin.view.common.Form', {
	extend: 'Ext.window.Window',
    modal: true,
    bodyBorder: false,
	layout: 'fit',

    defaults: {
        xtype: 'form',
        defaultType: 'textfield',
        bodyBorder: false,
        bodyPadding: 15,
        defaults: {
            labelWidth: 70,
            labelAlign: 'right',
            labelSeparator: '：',
            submitEmptyText: false,
            anchor: '100%'
        }
    },
	//idColumn: 'xxx',//主键列名
    //showAddCallback: function(){},//显示添加表单回调
	//saveCallback: function(form,response){},//保存方法回调
	//loadCallback: function(form,response){},//加载表单回调
    buttons: [
            {
                text: '保存',
                ui: 'blue',
                formBind: true,
                iconCls: 'icon-save',
                listeners: {
                    click: function(){
                        this.up('window').onSave(this);
                    }
                }
            },
            {
                text: '关闭',
                ui: 'blue',
                formBind: true,
                iconCls: 'icon-remove',
                listeners: {
                    click: function(){
                        this.up('window').onClose(this);
                    }
                }
            }
    ],constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({}, cfg)]);
    },
    onSave:function(btn){
        var win = btn.up('window');
        var currentView = win.getController().getViewModel().getData().currentView;
        if(win){
            var form = win.down('form').getForm();
            if(form&&form.isValid()){
                    form.submit({
                        url : win.addUrl||win.modifyUrl,
                        waitMsg : '正在提交数据',
                        waitTitle : '提示',
                        method : "POST",
                        submitEmptyText:false,
                        success : function(form, action) {
                            if(action.result.success){
                                var grid = currentView.lookupReference(currentView.getViewModel().getData().grid);
                                grid.getStore().reload();
                                if(win.saveCallback){
                                	win.saveCallback(form,action);
                                }
                                win.close();
                            }else{
                                Ext.MessageBox.show({
                                    title: '提示',
                                    msg: '保存失败：'+action.result.msg,
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.ERROR
                                });
                            }
                        },
                        failure : function(form, action) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '保存失败：'+action.result.msg,
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    });
            }/*else{

                console.log(form.isValid())
            }*/
        }
    },
    onClose: function (btn) {
        var win = btn.up('window');
        if (win) {
            win.close();
        }
    },
    loadForm: function(btn){
        var me = this;
        var record = me.hasSelectedRow(me);
         // console.log(record);
        if(!record){
            Ext.MessageBox.show({
                title: '提示',msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            var winForm = this.down('form').getForm();
            // var userForm = this.lookupReference("Form").getForm();
            var id = (me.idColumn)?record.data[me.idColumn]:record.data.id;
            // console.log("id="+id);
            winForm.load({
                waitMsg:'正在加载',
                waitTitle:'',
                url : me.loadUrl+id+".action",
                /*params:{
                    uid:record.data.CID
                },*/
                method:'GET',
                success:function(form,action){
                	if(me.loadCallback){
                		me.loadCallback(form,action);
                	}
                    if(btn){
                        me.show(btn);
                    }else{
                        me.show();
                    }
                    // 
                },
                failure:function(form,action){
                    var errorMessage = action.result?action.result.errorMessage:'程序异常';
                    Ext.MessageBox.show({
                        title: '提示',msg: '加载信息失败:'+errorMessage,buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
                    });
                    me.close();
                }
            })
        }   
    },hasSelectedRow: function(win){//返回选中记录,如果没有选中返回false
        var currentView = win.getController().getViewModel().getData().currentView;
        var grid = currentView.lookupReference(currentView.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            return false;
        }
        return record;
    }
});