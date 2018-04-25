Ext.define('Admin.store.sys.admin.Supplier', {
	extend: 'Ext.data.Store',
	alias: 'store.sys.admin.Supplier',
    fields: [
    	{name: 'value'},
    	{name: 'supplierName'}
    ],
    method: 'GET',
    proxy:{
        type: 'ajax',
        url: '/sys/admin/querysupplier.action'
    }
});


