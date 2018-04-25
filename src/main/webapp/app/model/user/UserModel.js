Ext.define('Admin.model.user.UserModel', {
    extend: 'Admin.model.Base',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'code'
        },
        {
            name: 'password'
        },
        {name: 'ds'},
        {name: 'mobile'},
        {name: 'rank'},
        {name: 'job'},
        {name: 'branch'},
        {name: 'ws'},
        {name: 'team'},
        {name: 'jobName'},
        {name: 'branchName'},
        {name: 'wsName'},
        {name: 'teamName'}
    ]
});
