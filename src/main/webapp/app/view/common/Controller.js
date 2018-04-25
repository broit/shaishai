Ext.define('Admin.view.common.Controller', {
    extend: 'Ext.app.ViewController',

    getSearchParams: function(){
        var me = this;
        var searchParams = [];
        var searchPanel = null;//查询区
        //从view中遍历是否有查询区
        me.getView().items.each(function(item){
            if(item.searchField){
                searchPanel = item;
                return false;
            }
        });
        if(searchPanel!=null){//遍历查询区中的输入组件
            searchPanel.getForm().getFields().each(function(item) {
                if(item.useRawValue){
                    searchParams[item.getName()] = item.getRawValue();
                }else{
                    searchParams[item.getName()] = item.getValue();
                }
            });
        }
        return searchParams;
    },
    getSearchParamsJson: function(){
        var me = this;
        var searchParams = {};
        var searchPanel = null;//查询区
        //从view中遍历是否有查询区
        me.getView().items.each(function(item){
            if(item.searchField){
                searchPanel = item;
                return false;
            }
        });
        if(searchPanel!=null){//遍历查询区中的输入组件
            searchPanel.getForm().getFields().each(function(item) {
                if(item.useRawValue){
                    searchParams[item.getName()] = item.getRawValue();
                }else{
                    searchParams[item.getName()] = item.getValue();
                }
            });
        }
        return searchParams;
    },
    beforeListLoad: function(store,records,options){
        var me = this;
        var searchParams = me.getSearchParams();
        Ext.apply(store.proxy.extraParams, searchParams);
    },
    onSearch: function(){//默认的查询事件
        var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var searchParams = me.getSearchParams();
        //console.log(searchParams)
        grid.getStore().loadPage(1,{params : searchParams});
    },
    onSearchReset: function(){//查询条件重置
        var me = this;
        var searchPanel = null;//查询区
        //从view中遍历是否有查询区
        me.getView().items.each(function(item){
            if(item.searchField){
                searchPanel = item;
                return false;
            }
        });
        if(searchPanel!=null){//遍历查询区中的输入组件
            searchPanel.getForm().reset();
        }
    },
    onAdd: function(btn){//默认的添加事件
        var me = this;
        var form = me.getViewModel().getData().addForm;
        if(form){
            var addForm = Ext.create(form);
            addForm.show(btn);
            if(addForm.showAddCallback){
                addForm.showAddCallback();
            }
        }
        
    },
    onModify: function(btn){//默认的修改事件
        var me = this;
        var modelData = me.getViewModel().getData();
        var form = modelData.modifyForm;
        if(form){
            var modifyForm = Ext.create(form);
            modifyForm.loadForm(btn);
        }
    },
    onRemove: function(){//默认的删除事件
        var me = this;
        var grid = me.lookupReference(me.getViewModel().getData().grid);
        var record = grid.getSelectionModel().getSelection()[0];
        if(record === undefined){
            Ext.MessageBox.show({
                msg: '请选择一条记录',buttons: Ext.MessageBox.OK,icon: Ext.MessageBox.WARNING,minWidth:200
            });
            return;
        }else{
            var confirmText = me.getViewModel().getData().removeConfirmText||'确定删除吗?';
            Ext.MessageBox.confirm('提示', confirmText, function(btn){
                if(btn=='yes'){
                    var idColumn = me.getViewModel().getData().idColumn;
                    var id =(idColumn)?record.data[idColumn]:record.data.id;
                    Ext.Ajax.request({
                        url: me.getViewModel().getData().removeUrl+id+".action",
                        method: "POST",
                        callback:function(options,success,response){
                            var responseData = Ext.decode(response.responseText);
                            if(responseData.success){
                                grid.getStore().reload();
                                if(me.removeCallback){
                                    me.removeCallback();
                                }
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

    onItemSelected: function (sender, record) {
    },
    onItemDelected: function(){
    },
    onBack: function(btn){//返回
        var viewport_main = Ext.getCmp('mainviewport');
        var controller_main = viewport_main.getController();

        var me = this;
        var view = me.getView(); 

        var hashTag = view.getViewModel().viewOption.lastViewHash;
        controller_main.redirectTo(hashTag);
    }
    //,removeCallback: function(){}//删除方法回调
});
