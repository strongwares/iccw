Ext.define('icc.view.svraction.SvrAction', {
    extend: 'Ext.Panel',
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
            xtype: 'status.statusbar',
            margin: '5 5 5 10',
            width: '100%'
        },
        {
            xtype: 'button',
            margin: 5,
            width: 175,
            //text: 'Settings...',
            bind: {
                text: '{buttonSettings}'
            },
            listeners: {
                tap: 'onSettings'
            }
        },
        {
            xtype: 'button',
            //text: 'Install IOTA',
            bind: {
                text: '{buttonInstallIota}'
            },
            margin: 5,
            width: 175,
            listeners: {
                tap: 'onInstallIota'
            }
        },
        {
            xtype: 'button',
            //text: 'Start IOTA',
            bind: {
                text: '{buttonStartIota}'
            },
            width: 175,
            margin: 5,
            listeners: {
                tap: 'onStartIota'
            }
        },
        {
            xtype: 'button',
            //text: 'Stop IOTA',
            bind: {
                text: '{buttonStopIota}'
            },
            width: 175,
            margin: 5,
            listeners: {
                tap: 'onStopIota'
            }
        },
        {
            xtype: 'button',
            //text: 'Delete DB',
            bind: {
                text: '{buttonDeleteDb}'
            },
            width: 175,
            margin: 5,
            listeners: {
                tap: 'onDeleteDb'
            }
        },
        {
            xtype: 'button',
            //text: 'Uninstall IOTA',
            bind: {
                text: '{buttonUninstallIota}'
            },
            width: 175,
            margin: 5,
            listeners: {
                tap: 'onUninstallIota'
            }
        },
        {
            xtype: 'button',
            //text: 'ICCR Event Log...',
            bind: {
                text: '{buttonIccrEventLog}'
            },
            width: 175,
            margin: 5,
            listeners: {
                tap: 'onIccrEventLog'
            }
        },
        {
            xtype: 'button',
            //text: 'IOTA Log...',
            bind: {
                text: '{buttonIotaLog}'
            },
            width: 175,
            margin: 5,
            listeners: {
                tap: 'onIotaLog'
            }
        }
    ]

});
