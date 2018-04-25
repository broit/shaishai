Ext.define('Admin.store.user.UserAuth', {
	extend: 'Ext.data.TreeStore',
	alias: 'store.user.UserAuth',
	storeId: 'UserAuth',
	constructor: function(cfg) {
            var me = this;
            cfg = cfg || {};
            me.callParent([Ext.apply({
            	root: {
			        expanded: true,
			        children: Ext.auth.funcTree
			    }
            }, cfg)]);
        }
});