Ext.define('Admin.store.sys.admin.Key', {
	extend: 'Ext.data.Store',
	alias: 'store.sys.admin.Key',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'0',text:'不启用'},
        {value:'1',text:'启用'}
    ]
});


