Ext.define('Admin.store.common.Clevel3', {
	extend: 'Ext.data.Store',
	alias: 'store.common.Clevel3',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'1',text:'一级'},
        {value:'2',text:'二级'},
        {value:'3',text:'三级'}
    ]
});


