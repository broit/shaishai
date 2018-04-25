Ext.define('Admin.view.common.Container', {
    extend: 'Ext.container.Container',

    scrollable: 'y',

    layout: {
        type: 'vbox',
        align: 'stretch',

        // Tell the layout to animate the x/width of the child items.
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    }
});
