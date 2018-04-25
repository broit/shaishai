Ext.define('Admin.store.common.WebOrWx', {
	extend: 'Ext.data.Store',
	alias: 'store.common.WebOrWx',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'1',text:'微信'},
        {value:'0',text:'web'}
    ]
});


