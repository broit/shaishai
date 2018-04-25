Ext.define('Admin.view.sys.admin.Controller', {
    extend: 'Admin.view.common.Controller',

    alias: 'controller.adminController',
    onUserRole: function(btn){
        var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            Ext.MessageBox.show({
                msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            var win = Ext.create('Admin.view.sys.admin.AdminRole',{userId: record.data.id});
            win.loadForm(btn);
        }
    },
    enableUser: function(){
        var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            Ext.MessageBox.show({
                msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            Ext.MessageBox.confirm('提示', '确定启用吗?', function(btn){
                if(btn=='yes'){
                    var idColumn = me.getViewModel().getData().idColumn;
                    var id =(idColumn)?record.data[idColumn]:record.data.id;
                    Ext.Ajax.request({
                        url: "/sys/admin/enable.action",
                        method: "POST",
                        params: {
                            id: id,
                            alock: ''
                        },
                        callback:function(options,success,response){
                            var responseData = Ext.decode(response.responseText);
                            if(responseData.success){
                                grid.getStore().reload();
                            }else{
                                Ext.MessageBox.show({
                                    title: '提示',
                                    msg: '删除失败：'+responseData.errorMessage,
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.ERROR
                                });
                            }
                        }
                    });
                }
            });
        }
    },
    disableUser: function(){
        var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            Ext.MessageBox.show({
                msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            Ext.MessageBox.confirm('提示', '确定锁定吗?', function(btn){
                if(btn=='yes'){
                    var idColumn = me.getViewModel().getData().idColumn;
                    var id =(idColumn)?record.data[idColumn]:record.data.id;
                    Ext.Ajax.request({
                        url: "/sys/admin/disable.action",
                        method: "POST",
                        params: {
                            id: id,
                            alock: '1'
                        },
                        callback:function(options,success,response){
                            var responseData = Ext.decode(response.responseText);
                            if(responseData.success){
                                grid.getStore().reload();
                            }else{
                                Ext.MessageBox.show({
                                    title: '提示',
                                    msg: '删除失败：'+responseData.errorMessage,
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.ERROR
                                });
                            }
                        }
                    });
                }
            });
        }
    }
});