Ext.define('icc.view.nbr.Nbr', {
    //extend: 'Ext.Panel',
    //extend: 'Ext.Container',
    extend: 'Ext.grid.Panel',
    xtype: 'nbr.nbr',

    requires: [
        'icc.view.nbr.NbrController'
        //'Ext.grid.plugin.Editable'
    ],

    controller: 'nbr',
    viewModel: {
        type: 'nbrmodel'
    },

    /*
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    */

    //layout: 'border',
    //layout: 'vbox',

//    items: [
//        {
            //region: 'center',
            //autoScroll: true,
//            xtype: 'grid',
            name: 'nbrGrid',
            //flex: 1,
            //minWidth: 500,
            //forceFit: true,
            //height: 400,
            //width: '100%',
            //height: '100%',
            //minHight: 00,
            store: Ext.data.StoreManager.lookup('nbrStore'),
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
//        }

        /*
        {
            region: 'south',
            xtype: 'label',
            html: 'hello'
        }
         */
        /*
        {
            region: 'south',
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
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
                        click: 'onRemoveClick'
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
                        click: 'onAddClick'
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
                        click: 'onSaveClick'
                    }
                }
            ]
        }
        */
//     ],

    /*
    dbbar: [
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
                click: 'onRemoveClick'
            }
        },
        '->',
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
                click: 'onAddClick'
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
                click: 'onSaveClick'
            }
        }
    ]
    */

});
