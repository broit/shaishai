Ext.define('Admin.store.common.ReturnG', {
	extend: 'Ext.data.Store',
	alias: 'store.common.ReturnG',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'0',text:'申请'},
        {value:'1',text:'同意'},
        {value:'2',text:'不同意'}
    ]
});


