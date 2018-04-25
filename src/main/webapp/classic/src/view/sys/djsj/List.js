Ext.define('Admin.view.sys.djsj.List', {
    extend: 'Admin.view.common.GridList',
    xtype: 'djsjList',
    reference : 'djsjListGrid',
    columns: [
        {hidden: true,dataIndex: 'id'},
        {text: '商城名称', dataIndex: 'mallName'},
        {text: '购买用户',  dataIndex: 'uname' },
        {text: '交易编号',  dataIndex: 'businessCode' },
        {text: '交易状态',  dataIndex: 'businessStatus' ,
        	renderer:function(value){
         	 if(value=='1'){
           		 return '1';
           	 }
          	return value;
       }},
        {text: '交易时间',  dataIndex: 'businessDatetime' },
        {text: '交易金额',  dataIndex: 'payMoney' },
        {text: '交易类型',  dataIndex: 'payType' },
        {text: '付款编号',  dataIndex: 'payNo' },
        {text: '付款时间',  dataIndex: 'payTime' }
        
    ],
    toolbar : 'djsjGridToolbar'
});
