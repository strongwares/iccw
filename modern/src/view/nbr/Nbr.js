Ext.define('icc.view.nbr.Nbr', {
    extend: 'Ext.Panel',
    xtype: 'nbr.nbr',

    requires: [
        'icc.view.status.StatusBar',
        'Ext.grid.plugin.Editable'
    ],

    controller: 'nbr',
    viewModel: {
        type: 'nbrmodel'
    },

    items: [
        {
            xtype: 'status.statusbar',
            margin: 5
        },
        {
            xtype: 'grid',
            name: 'nbrGrid',
            margin: 1,
            store: Ext.data.StoreManager.lookup('nbrStore'),
            rowLines: true,
            columns: [
                {
                    //text: 'A',
                    bind: {
                        text: '{columnAt}'
                    },
                    dataIndex: 'at',
                    sortable: true,
                    hideable: false,
                    flex: 1
                },
                {
                    //text: 'I',
                    bind: {
                        text: '{columnIt}'
                    },
                    dataIndex: 'it',
                    sortable: true,
                    hideable: false,
                    flex: 1
                },
                {
                    //text: 'N',
                    bind: {
                        text: '{columnNt}'
                    },
                    dataIndex: 'nt',
                    sortable: true,
                    hideable: false,
                    flex: 1
                },
                {
                    //text: 'Active',
                    bind: {
                        text: '{columnActive}'
                    },
                    xtype: 'checkcolumn',
                    headerCheckbox: true,
                    dataIndex: 'active',
                    sortable: true,
                    hideable: false,
                    flex: 2,
                    hidden: true
                },
                {
                    //text: 'Neighbor',
                    bind: {
                        text: '{columnNbr}'
                    },
                    dataIndex: 'nbr',
                    sortable: true,
                    hideable: false,
                    flex: 6
                },
                {
                    //text: 'Descr',
                    bind: {
                        text: '{columnDescr}'
                    },
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
                    //text: 'Remove',
                    bind: {
                        text: '{buttonRemove}'
                    },
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
                    //text: 'Add',
                    bind: {
                        text: '{buttonAdd}'
                    },
                    listeners: {
                        tap: 'onAddTap'
                    }
                },
                {
                    xtype: 'button',
                    //padding: '10px',
                    margin: 5,
                    docked: 'right',
                    //text: 'Save',
                    bind: {
                        text: '{buttonSave}'
                    },
                    disabled: true,
                    listeners: {
                        tap: 'onSaveTap'
                    }
                }
            ]
        }
    ]
});
