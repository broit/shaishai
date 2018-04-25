Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    stores: [
        'user.UserAuth'
    ],

    // defaultToken : 'dashboard',

    //controllers: [
        // TODO - Add Global View Controllers here
    //],
    launch: function(){
        Ext.Ajax.on('requestcomplete',function(conn,response,options){
            var json = Ext.decode(response.responseText);
            if(typeof json == 'object'
                && !json.success
                && json.timeout){
                alert("登录超时（或用户没有此操作权限）,系统将自动跳转到登陆页面,请重新登录!");
                top.window.location.href = json.redirectUri;
            }

        }, this);

    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
Ext.override(Ext.view.Table,{
    enableTextSelection: true,
    listeners: {
        afterRender: function(){
            if(this.enableTextSelection){
                this.el.selectable();
            }
        }
    }
});