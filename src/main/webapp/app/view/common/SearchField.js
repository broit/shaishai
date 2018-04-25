Ext.define('Admin.view.common.SearchField', {
        requires: ['Ext.ux.layout.ResponsiveColumn'],
        extend: 'Ext.form.Panel',
        bind: '{funcName}',
        layout: {
            type: 'responsivecolumn'
        },
        defaults: { // defaults are applied to items, not the container
        	margin:5
        },
        searchField: true,
        bodyPadding: 5,
        constructor: function(cfg) {
            var me = this;
            cfg = cfg || {};
            if(!me.items&&me.disableSearch){
                cfg.bodyPadding = 0;
            }
            me.callParent([Ext.apply({}, cfg)]);
            if(!me.disableSearch){
                me.add({
                    xtype: 'button',
                    handler: 'onSearch',
                    iconCls: 'icon-search',
                    text: '查　询'
                });
                me.add({
                    xtype: 'button',
                    handler: 'onSearchReset',
                    iconCls: 'icon-refresh',
                    text: '重　置'
                });
            }
        }
});