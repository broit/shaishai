Ext.define('Admin.view.main.ViewportModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainviewport',

    data: {
        currentView: null,

        viewOption:{
        	params: null,
        	virtualNode: {
        		text:null,
        		view:null
        	},
            lastViewHash: null,
        	forceRefresh:false
        }
    }
});
