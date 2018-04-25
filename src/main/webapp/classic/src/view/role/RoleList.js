Ext.define('Admin.view.role.RoleList', {
    extend: 'Admin.view.common.GridList',
    xtype: 'roleList',
    reference : 'roleListGrid',
    columns: 
    [
        
        {hidden: true,dataIndex: 'roleUid'},
        {text: '角色名', width:200, dataIndex: 'roleName' },
        {text: '创建时间', dataIndex: 'roleCreatedate',
        width: 160,
        renderer:function(value){
            return Ext.util.Format.date(new Date(value),"Y-m-d H:i:s");
        }},
        {text: '备注', dataIndex: 'roleRemark',width:230}
    ],
    toolbar : 'roleGridToolbar'
});
