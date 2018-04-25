Ext.define('Admin.store.func.Func', {
	extend: 'Ext.data.Store',
	alias: 'store.func.funcStore',
    method: 'GET',
	model: 'Admin.model.func.Model',
    proxy: {
        type: 'ajax',
        url: '/func/parentList.action',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'count'
        }
    }
});