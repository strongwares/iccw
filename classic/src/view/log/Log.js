Ext.define('icc.view.log.Log', {
    extend: 'Ext.Panel',
    xtype: 'log.log',

    requires: [
        'icc.view.log.LogController'
    ],

    controller: 'log',
    viewModel: {
        type: 'logmodel'
    },

    /*
    layout: {
        type: 'vbox',
        align: 'fit',
        padding: 5
    },
    */

    items: [
        /*
        {
            xtype: 'label',
            bind: {
                html: '{consoleLabel}'
            },
            margin: '5 5 2 5',
            width: '100%'
        },
         */
        {
            bind: {
                title: '{consoleLabel}'
            },
            xtype: 'grid',
            name: 'consoleLogGrid',
            reference: 'consoleLogGrid',
            store: Ext.data.StoreManager.lookup('consoleLogStore'),
            //margin: 5,
            border: true,
            rowLines: false,
            forceFit: true,
            //layout: '',
            //hideHeaders: true,
            //flex: 1,
            //width: '100%',
            //height: '100%',
            //scrollable: true,
            //baseCls: 'console-log-grid',
            columns: [
                {
                    text: 'Line',
                    dataIndex: 'line',
                    //width: '100%',
                    flex: 1,
                    sortable: false,
                    hideable: false,
                    width: 400
                }
            ]
        }
    ]
});


