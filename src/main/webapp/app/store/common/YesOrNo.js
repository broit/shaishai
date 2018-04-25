Ext.define('Admin.store.common.YesOrNo', {
	extend: 'Ext.data.Store',
	alias: 'store.common.YesOrNo',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'1',text:'是'},
        {value:'0',text:'否'}
    ]
});


