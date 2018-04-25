Ext.define('Admin.view.role.RoleFunc', {
	extend: 'Ext.window.Window',
    title: '角色功能',
    modal: true,
    bodyBorder: false,
	layout: 'fit',
    width: 340,
    height: 460,
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
                    autoScroll:true, 
                    listeners: {
                        'checkchange': function(record, checked){
                            if(checked){//如果勾选级联选中上级和下级
                                record.bubble(function(parentNode) {
                                     parentNode.set('checked', checked);
                                 });

                                 record.cascadeBy(function(node) {
                                     node.set('checked', checked);
                                 });
                             }else{//如果取消选中
                                if(record.get('type')=='func'){//对功能要级联操作
                                    record.cascadeBy(function(node) {
                                         node.set('checked', checked);
                                     });
                                    var hasChacked = 0;
                                    record.parentNode.eachChild(function(node){
                                        if(node.get('checked')){
                                            hasChacked++;
                                        }
                                    });
                                    if(hasChacked==0){
                                        record.parentNode.set('checked',checked);
                                    }
                                }
                             }
                            
                        }
                    }
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
                url : '/role/roleFunc/'+win.roleUid+'.action',
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
        // console.log(treepanel.getView());
        var records = treepanel.getView().getChecked(),
            userRole = {"roleUid": win.roleUid};
        var rfIndex = 0;
        var roIndex = 0;
        Ext.Array.each(records, function(rec,index){
            if(rec.get('type')=='func'){
                userRole["rfList["+rfIndex+"].rolefuncFuncid"] = rec.get('value');
                userRole["rfList["+rfIndex+"].rolefuncRoleid"] = win.roleUid;
                rfIndex++;
            }else{
                if(rec.get('value')){
                    userRole["roList["+roIndex+"].roleoperOperid"] = rec.get('value');
                    userRole["roList["+roIndex+"].roleoperRoleid"] = win.roleUid;
                    roIndex++;
                }
            }
        });
        
        Ext.Ajax.request({
             url: '/role/roleFuncOper.action',
             method: 'POST',
             params : userRole,
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
        var rootNode = treepanel.getRootNode();
        rootNode.cascadeBy(function(node) {
             node.set('checked', btn.checkType);
         });
        btn.checkType = !btn.checkType;
        if(btn.checkType){
            btn.setText("全选");
        }else{
            btn.setText("全取消");
        }
        
    }
});