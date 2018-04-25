Ext.define('Admin.view.role.RoleController', {
    extend: 'Admin.view.common.Controller',

    alias: 'controller.roleController',
    onRoleFunc: function(btn){
        var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            Ext.MessageBox.show({
                msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            var win = Ext.create('Admin.view.role.RoleFunc',{roleUid: record.data.roleUid});
            win.loadForm(btn);
        }
    	
    }
});
