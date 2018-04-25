Ext.define('Admin.view.sys.djsj.SearchField', {
	xtype: 'djsjSearchField',
	extend: 'Admin.view.common.SearchField',
	disableSearch: true,//是否不自动添加'查询'按钮
	items: [
		{
			xtype: 'combobox',
		    fieldLabel: '单据类型',
		    name: 'type',
		    colspan: 2 ,
		    allowBlank: false,
		    editable: false,
		    displayField: 'text',
		    valueField: 'value',
		    queryMode: 'local',
		    id:'sys_djsj_search_id',
		    store: {
		        type: 'sys.djsj.Store',
		        autoLoad : true
		    },
		    listeners: {
		    	select:'combobox_djsj_select'
		    }
		   
		},{
		    text: '保存',//支付之前
		    xtype: 'button',
		    oper: 'modify',
		    listeners: {
		        click: 'djsjSave'
		    }
		}
	]
});