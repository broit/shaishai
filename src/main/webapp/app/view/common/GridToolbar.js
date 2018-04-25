Ext.define('Admin.view.common.GridToolbar', {
	extend: 'Ext.toolbar.Toolbar',
    dock: 'top',
    ui: 'footer',
	constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({}, cfg)]);
        var btns = ['->'];
        // console.log(Ext.author)
        if(!me.disableAdd
            &&me.authorOption(Ext.author[me.func],"add")){
        	btns.push({
                    text: '添加',
                    reference: 'btnAdd',
                    iconCls: 'icon-plus',
                    listeners: {
                        click: 'onAdd'
                    }
                });
        }
        if(!me.disableModify
            &&me.authorOption(Ext.author[me.func],"modify")){
        	btns.push({
                    text: '修改',
                    reference: 'btnModify',
                    iconCls: 'icon-pencil',
                    listeners: {
                        click: 'onModify'
                    }
                });
        }
        if(!me.disableRemove
            &&me.authorOption(Ext.author[me.func],"remove")){
        	btns.push({
                    text: '删除',
                    reference: 'btnRemove',
                    iconCls: 'icon-trash',
                    listeners: {
                        click: 'onRemove'
                    }
                });
        }
        if(me.buttons){
            Ext.Array.each(me.buttons, function(btn, index) {
                if(me.authorOption(Ext.author[me.func],btn.oper)){
                    btns.push(btn);
                }
            });
        }
        me.add(btns);
    },
    authorOption:function(func,optCode){//验证用户操作权限
        if(!func){
            return true;
        }else{
            if(Ext.Array.contains(func,optCode)){
                return true;
            }
            return false;
        }
    }
});