Ext.define('Admin.view.func.List', {
    extend: 'Admin.view.common.GridList',
    xtype: 'funcList',
    reference : 'funcListGrid',
    columns: [
        {hidden: true,dataIndex: 'funcUid'},
        {hidden: true, dataIndex: 'funcParent'},
        {text: '名称', dataIndex: 'funcName',width:130},
        {text: '编码',  dataIndex: 'funcCode' ,width:130},
        {text: '所属功能', dataIndex: 'funcParentName',width:130},
        {text: '级别', dataIndex: 'funcLevel',width:130},
        {text: 'URL', dataIndex: 'funcUrl',width:230},
        {text: '图标', dataIndex: 'funcImg',align:'center'
            ,renderer:function(value){
                return '<i class="x-fa '+value+'"></i>';
            },width:130},
        {text: '排序', dataIndex: 'funcIserial',width:130},
        {text: '备注', dataIndex: 'funcRemark',width:230}
    ],
    toolbar : 'funcGridToolbar'
});
