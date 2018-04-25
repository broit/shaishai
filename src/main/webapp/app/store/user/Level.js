Ext.define('Admin.store.user.Level', {
	extend: 'Ext.data.Store',
	alias: 'store.user.LevelStore',
    fields: [
    	{name: 'name'},
    	{name: 'level'}
    ],
    data: Ext.userlevel
});