Ext.define('icc.view.nbr.Nbr', {
    extend: 'Ext.grid.Panel',
    xtype: 'nbr.nbr',

    requires: [
        'icc.store.Nbr'
        //'Ext.grid.plugin.Editable'
    ],

    controller: 'nbr',
    viewModel: {
        type: 'nbrmodel'
    },

    name: 'nbrGrid',
    //flex: 1,
    //minWidth: 500,
    //forceFit: true,
    //height: 400,
    //width: '100%',
    //height: '100%',
    //minHight: 00,

    // This is the storeId
    // store: Ext.data.StoreManager.lookup('nbrStore'),
    // or
    // This is the store alias (i.e. store.<alias>)
    store: {
        type: 'nbr'
    },

    rowLines: true,
    columns: [
        {
            //text: 'AT',
            bind: {
                text: '{columnAt}'
            },
            dataIndex: 'at',
            sortable: true,
            hideable: true,
            editable: false,
            flex: 1
            //width: 5
            //width: 10,
            //minWidth: 5
        },
        {
            //text: 'IT',
            bind: {
                text: '{columnIt}'
            },
            dataIndex: 'it',
            sortable: true,
            hideable: true,
            editable: false,
            flex: 1
            //width: 5
            //minWidth: 10
            //minWidth: 5
        },
        {
            //text: 'NT',
            bind: {
                text: '{columnNt}'
            },
            dataIndex: 'nt',
            sortable: true,
            hideable: true,
            editable: false,
            flex: 1
            //width: 5
            //minWidth: 5
        },
        {
            //text: 'Active',
            bind: {
                text: '{columnActive}'
            },
            tdCls: 'grid-cell-middle',
            xtype: 'checkcolumn',
            headerCheckbox: true,
            dataIndex: 'active',
            sortable: true,
            hideable: true,
            flex: 2
            //width: 10
            //minWidth: 10
        },
        {
            //text: 'Neighboring Node Address',
            bind: {
                text: '{columnNbr}'
            },
            dataIndex: 'nbr',
            sortable: true,
            hideable: false,
            flex: 6
            //width: 300
            //minWidth: 200
        },
        {
            //text: 'Description (optional)',
            bind: {
                text: '{columnDescr}'
            },
            dataIndex: 'descr',
            sortable: true,
            hideable: true,
            flex: 4
            //width: 200
            //minWidth: 150,
        }
    ]

});
