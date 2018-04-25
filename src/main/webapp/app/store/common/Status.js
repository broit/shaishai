Ext.define('Admin.store.common.Status', {
	extend: 'Ext.data.Store',
	alias: 'store.common.Status',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'1',text:'启用'},
        {value:'0',text:'禁用'}
    ]
});


