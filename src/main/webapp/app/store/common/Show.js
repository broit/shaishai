Ext.define('Admin.store.common.Show', {
	extend: 'Ext.data.Store',
	alias: 'store.common.Show',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'1',text:'显示'},
        {value:'0',text:'不显示'}
    ]
});


