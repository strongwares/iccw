Ext.define('icc.view.log.Log', {
    extend: 'Ext.Panel',
    xtype: 'log.log',

    requires: [
        'icc.store.ConsoleLog',
        'icc.view.status.StatusBar'
    ],

    controller: 'log',
    viewModel: {
        type: 'logmodel'
    },

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
            //style: 'background: black',
            // This is the storeId
            //store: Ext.data.StoreManager.lookup('consoleLog'),
            // This is the store alias (i.e. store.<alias>)
            store: {
                type: 'consolelog'
            },
            viewConfig: {
                stripeRows: false
            },
            columns: [
                {
                    //text: 'Line',
                    //style: 'background-color: black; color: yellow',
                    //baseCls: 'console-log-grid-cell',
                    dataIndex: 'line',
                    width: '100%',
                    flex: 1,
                    sortable: false,
                    hideable: false
                }
            ]
        }
    ]
});


