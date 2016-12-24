Ext.define('icc.view.nbr.Nbr', {
    extend: 'Ext.Panel',
    xtype: 'nbr.nbr',

    requires: [
        'icc.view.nbr.NbrController'
        //'Ext.grid.plugin.Editable'
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
                    text: 'AT',
                    dataIndex: 'at',
                    sortable: true,
                    hideable: true,
                    editable: false,
                    flex: 1
                },
                {
                    text: 'IT',
                    dataIndex: 'it',
                    sortable: true,
                    hideable: true,
                    editable: false,
                    flex: 1
                },
                {
                    text: 'NT',
                    dataIndex: 'nt',
                    sortable: true,
                    hideable: true,
                    editable: false,
                    flex: 1
                },
                {
                    text: 'Active',
                    xtype: 'checkcolumn',
                    headerCheckbox: true,
                    dataIndex: 'active',
                    sortable: true,
                    hideable: true,
                    flex: 2
                },
                {
                    text: 'Neighboring Node Address',
                    dataIndex: 'nbr',
                    sortable: true,
                    hideable: false,
                    flex: 6
                },
                {
                    text: 'Description (optional)',
                    dataIndex: 'descr',
                    sortable: true,
                    hideable: true,
                    flex: 4
                }
            ]
        }
     ],

    bbar: [
        {
            xtype: 'button',
            //padding: '10px',
            margin: 5,
            text: 'Remove',
            disabled: true,
            docked: 'left',
            listeners: {
                click: 'onRemoveClick'
            }
        },
        '->',
        {
            xtype: 'button',
            //padding: '10px',
            margin: 5,
            docked: 'right',
            text: 'Add',
            listeners: {
                click: 'onAddClick'
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
                click: 'onSaveClick'
            }
        }
    ]

});
