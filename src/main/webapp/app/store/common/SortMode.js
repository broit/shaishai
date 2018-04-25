Ext.define('Admin.store.common.SortMode', {
	extend: 'Ext.data.Store',
	alias: 'store.common.SortMode',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'desc',text:'降序'},
        {value:'asc',text:'升序'}
    ]
});


