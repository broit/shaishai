Ext.define('Admin.view.sys.djsj.Form', {
	extend: 'Admin.view.common.Form',
    controller : 'djsjController',
    width: 600,
    height: 500,
	title: '表单设置',
    idColumn: 'id',//主键列名
    //保存添加url
    addUrl: '/sys/djsj/save.action',
    //加载表单地址
    loadUrl: '/sys/djsj/',
    //修改地址
    modifyUrl: '/sys/djsj/save.action',
	items:[
        {
            xtype: 'form',
            defaultType: 'textfield',
            bodyBorder: false,
    		bodyPadding: 15,
    		layout: {
                type: 'table',
                columns: 2 //每行有几列
            },
            defaults: {
                labelWidth: 90,
                labelAlign: 'right',
                labelSeparator: '：',
                submitEmptyText: false,
                anchor: '100%'
            },
            items:[
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                }
               
            ]
        }
    ]
    ,showAddCallback: function(){
    	
    }
    ,loadCallback: function(form,response){
        
    }
});