Ext.define('Admin.store.common.Custom_search', {
	extend: 'Ext.data.Store',
	alias: 'store.common.Custom_seach',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'0',text:'无'},
        {value:'1',text:'应发货'},
        {value:'2',text:'未付款'}
    ]
});


