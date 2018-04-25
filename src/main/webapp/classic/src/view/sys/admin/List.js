Ext.define('Admin.view.sys.admin.List', {
    extend: 'Admin.view.common.GridList',
    xtype: 'adminList',
    reference : 'adminListGrid',
    columns: [
        {hidden: true,dataIndex: 'id'},
        {text: '登录名', dataIndex: 'acode',width:130},
        {text: '管理员姓名',  dataIndex: 'aname' ,width:230},
        {text: '类型', dataIndex: 'atype',align:'center'
             ,renderer:function(value){
            	 if(value=='1'){
            		 return '总平台';
            	 }else if(value=='2'){
            		 return '商城';
            	 }else if(value=='3'){
            		 return '仓库';
            	 }else if(value=='4'){
                     return '其他';
                 }
             },width:130},
        {text: '所属商城/仓库',  dataIndex: 'mallName' ,width:230},
        {text: '所属供应商',  dataIndex: 'supplierName',width:230 },
        {text: 'U盾授权码',  dataIndex: 'keySqm',width:230 },
        {text: 'U盾标识码',  dataIndex: 'keyBsm' ,width:230},
        {text: 'U盾启用', dataIndex: 'isKey'
            ,renderer:function(value){
            if(value=='1'){
                return '启用';
            }else if(value=='0'){
                return '禁用';
            }
        },width:130},
        {text: '启用状态', dataIndex: 'alock'
            ,renderer:function(value){
	           	 if(value=='1'){
	           		 return '启用';
	           	 }else if(value=='0'){
	           		 return '禁用';
	           	 }
           },width:130},
        {text: '创建时间', dataIndex: 'datetime',
           renderer: function(value){
               if(value){
                   return Ext.Date.format(new Date(value),'Y-m-d H:i');
               }
           },width:230
        }
    ],
    toolbar : 'adminGridToolbar'
});
