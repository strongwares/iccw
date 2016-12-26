Ext.define('icc.view.nbr.NbrButtonPanel', {
    extend: 'Ext.Container',
    //extend: 'Ext.Panel',

    xtype: 'nbr.nbrbuttonpanel',

    requires: [
        'icc.view.nbr.NbrButtonPanelController'
    ],

    controller: 'nbrbtnpanelctlr',
    viewModel: {
        type: 'nbrbtnpanelmodel'
    },

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
            html: '',
            flex: 1
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
});
