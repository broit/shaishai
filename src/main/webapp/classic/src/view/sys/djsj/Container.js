Ext.define('Admin.view.sys.djsj.Container', {
    extend: 'Admin.view.common.Container',

    requires: [
        'Admin.view.sys.djsj.SearchField',
        'Admin.view.sys.djsj.List',
        'Admin.view.sys.djsj.GridToolbar',
        'Admin.view.sys.djsj.Form',
        'Admin.view.sys.djsj.ViewModel',
        'Admin.view.sys.djsj.Controller',
        'Admin.store.sys.djsj.Store'
    ],

    viewModel: {
        type: 'djsjViewModel'
    },

    controller: 'djsjController',

    items:[
        {
            xtype: 'djsjSearchField'
        }
        ,
        {
            xtype: 'container',
            colspan:2,
            html: '<object id="LODOP_DESIGN" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=1000 height=600> '+
      		  		'<param name="Caption" value="模板编辑">'+
		  			'<param name="Border" value="1">'+
		  			'<param name="Color" value="#C0C0C0">'+
		  			'<embed id="LODOP_EM_DESIGN" TYPE="application/x-print-lodop" width=1000 height=600 PLUGINSPAGE="install_lodop.exe">'+
		  		'</object>'
        }
    ]
    ,listeners: {
        beforeactivate:'beforeContainerActive',
        afterlayout:'afterlayoutContainer'
    }

});
