Ext.define('icc.view.config.Config', {
    extend: 'Ext.form.Panel',
    xtype: 'cfg.cfg',

    requires: [
        'icc.view.status.StatusBar'
    ],

    controller: 'config',
    //bodyPadding: 10,
    //title: 'ICC Settings',
    closable: false,
    autoShow: true,

    defaults: {
        //margin: 10
    },

    items: [
        {
            xtype: 'status.statusbar',
            margin: 10
        },
        {
            html: 'Nbr Refresh Time:',
            margin: '10, 0, 2, 10'
        },
        {
            xtype: 'textfield',
            name: 'nbrRefreshTime',
            allowBlank: false,
            reference: 'nbrRefreshField',
            margin: '0, 10, 0, 10'
        },
        {
            html: 'Node Info Refresh Time:',
            margin: '10, 0, 2, 10'
        },
        {
            xtype: 'textfield',
            name: 'nodeInfoRefreshTime',
            allowBlank: false,
            reference: 'nodeInfoRefreshField',
            margin: '0, 10, 0, 10'
        },
        {
            html: 'IOTA Download Link:',
            margin: '10, 0, 2, 10'
        },
        {
            xtype: 'textfield',
            name: 'iotaDownloadLink',
            allowBlank: false,
            reference: 'iotaDownloadField',
            margin: '0, 10, 0, 10'
        },
        {
            xtype: 'checkboxfield',
            //padding: '10px',
            name: 'infoRefreshCheckbox',
            reference: 'infoRefresh',
            label: 'Refresh Nbr and Node Info:',
            labelWidth: '100%',
            margin: 10
        },
        {
            xtype: 'button',
            ui: 'action',
            padding: '10px',
            text: 'Save',
            listeners: {
                tap: 'onSaveTap'
            }
        }
    ]


});
