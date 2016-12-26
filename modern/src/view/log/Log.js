Ext.define('icc.view.log.Log', {
    extend: 'Ext.Panel',
    xtype: 'log.log',

    requires: [
        'icc.view.status.StatusBar'
    ],

    controller: 'log',
    viewModel: {
        type: 'logmodel'
    },
    //layout: 'fit',

    layout: {
        type: 'vbox',
        align: 'middle',
        padding: 5
    },

    items: [
        {
            xtype: 'status.statusbar',
            margin: 5,
            width: '100%'
        },
        {
            xtype: 'label',
            bind: {
                html: '{consoleLabel}'
            },
            margin: '5 5 2 5',
            width: '100%'
        },
        {
            xtype: 'grid',
            name: 'consoleLogGrid',
            reference: 'consoleLogGrid',
            margin: 5,
            rowLines: false,
            hideHeaders: true,
            layout: 'fit',
            flex: 1,
            width: '100%',
            height: '100%',
            scrollable: true,
            style: 'background: black',
            columns: [
                {
                    //text: 'Line',
                    dataIndex: 'line',
                    width: '100%',
                    sortable: false,
                    hideable: false
                }
            ]
        }
    ]
});


