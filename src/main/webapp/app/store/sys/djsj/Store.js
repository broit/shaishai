Ext.define('Admin.store.sys.djsj.Store', {
	extend: 'Ext.data.Store',
	alias: 'store.sys.djsj.Store',
    fields: [
    	{name: 'value'},
    	{name: 'text'}
    ],
    data: [
        {value:'百世快递',text:'百世快递'},
        {value:'EMS',text:'EMS'},
        {value:'优速快递',text:'优速快递'},
        {value:'天天快递',text:'天天快递'},
        {value:'全峰快递',text:'全峰快递'},
        {value:'申通快递',text:'申通快递'},
        {value:'快捷快递',text:'快捷快递'},
        {value:'圆通快递',text:'圆通快递'},
        {value:'中通快递',text:'中通快递'}
    ]

});


