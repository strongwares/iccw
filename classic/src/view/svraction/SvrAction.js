Ext.define('icc.view.svraction.SvrAction', {
    extend: 'Ext.panel.Panel',
    xtype: 'svraction.svraction',

    controller: 'svraction',
    viewModel: {
        type: 'svractionmodel'
    },

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
            //text: 'Settings...',
            bind: {
                text: '{buttonSettings}'
            },
            listeners: {
                click: 'onSettings'
            }
        },
        {
            xtype: 'button',
            //text: 'Install IOTA',
            bind: {
                text: '{buttonInstallIota}'
            },
            margin: 2,
            width: 120,
            listeners: {
                click: 'onInstallIota'
            }
        },
        {
            xtype: 'button',
            //text: 'Start IOTA',
            bind: {
                text: '{buttonStartIota}'
            },
            width: 120,
            margin: 2,
            listeners: {
                click: 'onStartIota'
            }
        },
        {
            xtype: 'button',
            //text: 'Stop IOTA',
            bind: {
                text: '{buttonStopIota}'
            },
            width: 120,
            margin: 2,
            listeners: {
                click: 'onStopIota'
            }
        },
        {
            xtype: 'button',
            //text: 'Delete DB',
            bind: {
                text: '{buttonDeleteDb}'
            },
            width: 120,
            margin: 2,
            listeners: {
                click: 'onDeleteDb'
            }
        },
        {
            xtype: 'button',
            //text: 'Uninstall IOTA',
            bind: {
                text: '{buttonUninstallIota}'
            },
            width: 120,
            margin: 2,
            listeners: {
                click: 'onUninstallIota'
            }
        },
        {
            xtype: 'button',
            //text: 'ICCR Event Log...',
            bind: {
                text: '{buttonIccrEventLog}'
            },
            width: 120,
            margin: 2,
            listeners: {
                click: 'onIccrEventLog'
            }
        },
        {
            xtype: 'button',
            //text: 'IOTA Log...',
            bind: {
                text: '{buttonIotaLog}'
            },
            width: 120,
            margin: 2,
            listeners: {
                click: 'onIotaLog'
            }
        }
    ]

});
