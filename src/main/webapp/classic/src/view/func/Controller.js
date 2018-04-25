Ext.define('Admin.view.func.Controller', {
    extend: 'Admin.view.common.Controller',

    alias: 'controller.funcController',
    onFuncOper: function(btn){//功能操作
    	var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            Ext.MessageBox.show({
                msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            var win = Ext.create('Admin.view.func.FuncOper',{funcUid: record.data.funcUid});
            win.loadForm(btn);
        }
    }
});