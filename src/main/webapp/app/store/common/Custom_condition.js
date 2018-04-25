Ext.define('Admin.store.common.Custom_condition', {
	extend: 'Ext.data.Store',
	alias: 'store.common.Custom_condition',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'0',text:'无'},
        {value:'1',text:'查询一'}
    ]
});


