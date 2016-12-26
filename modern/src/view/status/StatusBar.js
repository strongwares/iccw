Ext.define('icc.view.status.StatusBar', {
    extend: 'Ext.Panel',
    xtype: 'status.statusbar',

    controller: 'status',
    viewModel: {
        type: 'statusmodel'
    },

    layout: {
        type: 'hbox',
        align: 'left'
        //margin: 5
    },

    defaults: {
        //margin: '5 5 5 5'
    },

    items: [
        {
            xtype: 'label',
            bind: {
                html: '{online}'
            },
            margin: '5 3 5 1'
        },
        {
            xtype: 'label',
            cls: 'x-fa fa fa-question',
            reference: 'onlineIcon',
            margin: '6 5 5 0'
        },
        {
            xtype: 'label',
            bind: {
                html: '{milestonesLabel}'
            },
            reference: 'milestonesLabel',
            margin: '5 2 5 5'
        },
        {
            xtype: 'label',
            bind: {
                html: '{milestonesValue}'
            },
            reference: 'milestonesValue',
            margin: '5 5 5 0'
        },
        {
            xtype: 'label',
            bind: {
                html: '{solidMilestonesLabel}'
            },
            reference: 'solidMilestonesLabel',
            margin: '5 2 5 5'
        },
        {
            xtype: 'label',
            bind: {
                html: '{solidMilestonesValue}'
            },
            reference: 'solidMilestonesValue',
            margin: '5 0 5 0'
        }
    ]
});