Ext.define('icc.view.nbr.NbrButtonPanel', {
    extend: 'Ext.Container',
    //extend: 'Ext.Panel',

    xtype: 'nbr.nbrbuttonpanel',

    requires: [
        'icc.store.Nbr',
        'icc.view.nbr.NbrButtonPanelController'
    ],

    controller: 'nbrbtnpanelctlr',
    viewModel: {
        type: 'nbrbtnpanelmodel'
    },
    //store: Ext.getStore('Nbr'),

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
            },
            reference: 'removeButton'
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
            },
            reference: 'addButton'
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
            },
            reference: 'saveButton'
        }
    ]
});
