Ext.define('icc.view.nbr.Nbr', {
    extend: 'Ext.Panel',
    xtype: 'nbr.nbr',

    requires: [
        'icc.view.nbr.NbrController',
        'Ext.grid.plugin.Editable'
    ],

    controller: 'nbr',

    items: [
        {
            xtype: 'grid',
            name: 'nbrGrid',
            store: Ext.data.StoreManager.lookup('nbrStore'),
            rowLines: true,
            columns: [
                {
                    text: 'A',
                    dataIndex: 'at',
                    sortable: true,
                    hideable: false,
                    flex: 1
                },
                {
                    text: 'I',
                    dataIndex: 'it',
                    sortable: true,
                    hideable: false,
                    flex: 1
                },
                {
                    text: 'N',
                    dataIndex: 'nt',
                    sortable: true,
                    hideable: false,
                    flex: 1
                },
                /*
                {
                    text: 'Active',
                    xtype: 'checkcolumn',
                    headerCheckbox: true,
                    dataIndex: 'active',
                    sortable: true,
                    hideable: false,
                    flex: 2
                },
                */
                {
                    text: 'Neighbor',
                    dataIndex: 'nbr',
                    sortable: true,
                    hideable: false,
                    flex: 6
                },
                {
                    text: 'Descr',
                    dataIndex: 'descr',
                    sortable: true,
                    hideable: false,
                    flex: 4
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    //padding: '10px',
                    margin: 5,
                    text: 'Remove',
                    disabled: true,
                    docked: 'left',
                    listeners: {
                        tap: 'onRemoveTap'
                    }
                },
                {
                    xtype: 'button',
                    //padding: '10px',
                    margin: 5,
                    docked: 'right',
                    text: 'Add',
                    listeners: {
                        tap: 'onAddTap'
                    }
                },
                {
                    xtype: 'button',
                    //padding: '10px',
                    margin: 5,
                    docked: 'right',
                    text: 'Save',
                    disabled: true,
                    listeners: {
                        tap: 'onSaveTap'
                    }
                }
            ]
        }
    ]
});
