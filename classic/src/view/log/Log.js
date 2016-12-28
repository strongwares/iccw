Ext.define('icc.view.log.Log', {
    extend: 'Ext.Panel',
    xtype: 'log.log',

    requires: [
        'icc.store.ConsoleLog',
        'icc.view.log.LogController'
    ],

    controller: 'log',
    viewModel: {
        type: 'logmodel'
    },

    items: [
        {
            xtype: 'label',
            bind: {
                html: '{consoleLabel}'
            },
            margin: '5 5 2 5',
            width: '100%'
        },
        {
            /*
            bind: {
                title: '{consoleLabel}'
            },
            */
            xtype: 'grid',
            name: 'consoleLogGrid',
            reference: 'consoleLogGrid',
            // This is the storeId
            //store: Ext.data.StoreManager.lookup('consoleLog'),
            // This is the store alias (i.e. store.<alias>)
            store: {
                type: 'consolelog'
            },
            viewConfig: {
                stripeRows: false
            },
            margin: 5,
            border: true,
            rowLines: false,
            forceFit: true,
            flex: 1,
            hideHeaders: true,
            autoScroll: true,
            //cls: 'console-log-grid',
            //style: 'background-color: black',
            columns: [
                {
                    tdCls: 'console-log-grid-cell',
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


