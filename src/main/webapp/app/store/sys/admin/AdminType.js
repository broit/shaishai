Ext.define('Admin.store.sys.admin.AdminType', {
	extend: 'Ext.data.Store',
	alias: 'store.sys.admin.AdminType',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'1',text:'总平台'},
        {value:'2',text:'商城'},
        {value:'3',text:'仓库'},
        {value:'4',text:'其他'}
    ]
});


