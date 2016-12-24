Ext.define('icc.view.svraction.SvrAction', {
    extend: 'Ext.panel.Panel',
    xtype: 'svraction.svraction',

    requires: [
        'icc.view.svraction.SvrAction'
    ],

    controller: 'svraction',

    layout: {
        type: 'vbox',
        align: 'middle'
        //margin: 5
    },

    items: [
        {
            xtype: 'button',
            margin: 2,
            width: 120,
            text: 'Settings...',
            listeners: {
                click: 'onSettingsClick'
            }
        },
        {
            xtype: 'button',
            text: 'Install IOTA',
            margin: 2,
            width: 120,
            listeners: {
                click: 'onInstallIota'
            }
        },
        {
            xtype: 'button',
            text: 'Start IOTA',
            width: 120,
            margin: 2,
            listeners: {
                click: 'onStartIota'
            }
        },
        {
            xtype: 'button',
            text: 'Stop IOTA',
            width: 120,
            margin: 2,
            listeners: {
                click: 'onStopIota'
            }
        },
        {
            xtype: 'button',
            text: 'Delete DB',
            width: 120,
            margin: 2,
            listeners: {
                click: 'onDeleteDb'
            }
        },
        {
            xtype: 'button',
            text: 'Uninstall IOTA',
            width: 120,
            margin: 2,
            listeners: {
                click: 'onUninstallIota'
            }
        },
        {
            xtype: 'button',
            text: 'ICCR Event Log...',
            width: 120,
            margin: 2,
            listeners: {
                click: 'onIccrEventLog'
            }
        },
        {
            xtype: 'button',
            text: 'IOTA Log...',
            width: 120,
            margin: 2,
            listeners: {
                click: 'onIotaLog'
            }
        }
    ]

});
