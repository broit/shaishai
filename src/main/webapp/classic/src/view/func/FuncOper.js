Ext.define('Admin.view.func.FuncOper', {
	extend: 'Ext.window.Window',
    title: '功能操作',
    modal: true,
    bodyBorder: false,
	layout: 'fit',
    width: 280,
    height: 400,
    items:[
        {
            xtype: 'form',
            bodyBorder: false,
            bodyPadding: 0,
            layout: 'fit',
            defaults: {
                bodyBorder: false,
                bodyPadding: 0
            },
            items:[
                {
                    xtype: 'treepanel',
                    rootVisible: false,
                    useArrows: true,
                    bufferedRenderer: false,
                    animate: true,
                    frame:true,
                    split: true,
                    autoScroll:true
                }
            ]
        }
    ],
    buttons: [
            {
                text: '全选',
                ui: 'blue',
                checkType: true,
                formBind: true,
                listeners: {
                    click: function(){
                        this.up('window').onSelectAll(this);
                    }
                }
            },
            {
                text: '保存',
                ui: 'blue',
                formBind: true,
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
                listeners: {
                    click: function(){
                        this.up('window').onClose(this);
                    }
                }
            }
    ],
    loadForm: function(btn){
        var win = this;
        var formPanel = this.down('form');
        var form = formPanel.getForm();
        form.load({
                waitMsg:'正在加载',
                waitTitle:'',
                url : '/func/funcOper/'+win.funcUid+'.action',
                method:'GET',
                success:function(form,action){
                    formPanel.down('treepanel').setStore(new Ext.data.TreeStore({
                                    root: {
                                    expanded: true,
                                    children: action.result.data
                                    }
                                }))
                    win.show(btn);
                },
                failure:function(form,action){
                    Ext.MessageBox.show({
                        msg: '加载信息失败:'+action.result.errorMessage,buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
                    });
                }
            });
    },
    onSave:function(btn){
        var win = btn.up('window');
        var treepanel = win.down('treepanel');
        console.log(treepanel.getView());
        var records = treepanel.getView().getChecked(),
            funcOper = {"funcUid": win.funcUid};   
        Ext.Array.each(records, function(rec,index){
            // names.push(rec.get('text')+" : "+rec.get('value'));
            funcOper["list["+index+"].operCode"] = rec.get('value');
            funcOper["list["+index+"].operFunc"] = win.funcUid;
        });
        
        Ext.Ajax.request({
             url: '/func/funcOper.action',
             method: 'POST',
             params : funcOper,
             success: function(response, opts) {
                 var obj = Ext.decode(response.responseText);
                 if(obj.success){
                    Ext.MessageBox.show({
                        title: '信息',
                        msg: '保存成功',
                        icon: Ext.MessageBox.INFO,
                        buttons: Ext.MessageBox.OK
                    });
                    win.close();
                 }else{
                    Ext.MessageBox.show({
                        title: '信息',
                        msg: obj.errorMsg,
                        icon: Ext.MessageBox.WARNING,
                        buttons: Ext.MessageBox.OK
                    });
                 }
             },
             failure: function(response, opts) {
                 Ext.MessageBox.show({
                        title: '信息',
                        msg: '保存失败,服务器代码:'+response.status,
                        icon: Ext.MessageBox.WARNING,
                        buttons: Ext.MessageBox.OK
                    });
             }
         });
    },
    onClose: function (btn) {
        var win = btn.up('window');
        if (win) {
            win.close();
        }
    },
    onSelectAll: function(btn){
        var treepanel = btn.up('window').down('treepanel');
        var node = treepanel.getRootNode();
        node.eachChild(function (child) {
            child.set('checked',btn.checkType);   
        });
        btn.checkType = !btn.checkType;
        if(btn.checkType){
            btn.setText("全选");
        }else{
            btn.setText("全取消");
        }
        
    }
});