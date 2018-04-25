Ext.define('Admin.view.oper.List', {
    extend: 'Admin.view.common.GridList',
    xtype: 'operList',
    reference : 'operListGrid',
    columns: [
        {hidden: true,dataIndex: 'id'},
        {text: '名称', dataIndex: 'operName',flex:1},
        {text: '编码',  dataIndex: 'operCode',flex:1 }
    ],
    toolbar : 'operGridToolbar'
});
