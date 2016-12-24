Ext.define('icc.view.log.Log', {
    extend: 'Ext.Panel',
    xtype: 'log.log',

    requires: [
        'icc.view.log.LogController'
    ],

    controller: 'log',
    bodyPadding: 10,

    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: 5
    },

    items: [

    ]
});


