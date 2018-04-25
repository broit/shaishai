Ext.define('Admin.store.user.Team', {
	extend: 'Ext.data.Store',
	alias: 'store.user.TeamStore',
    method: 'GET',
	model: 'Admin.model.team.Model',
    proxy: {
        type: 'ajax',
        url: '/user/teamList.action'
    }
});