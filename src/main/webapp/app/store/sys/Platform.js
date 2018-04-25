Ext.define('Admin.store.sys.Platform', {
	extend: 'Ext.data.Store',
	alias: 'store.sys.Platform',
    method: 'GET',
	model: 'Admin.model.plat.mallPlatform.Model',
    proxy: {
        type: 'ajax',
        url: '/plat/mallPlatform/paramList.action'
    }
});