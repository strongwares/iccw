Ext.define('icc.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'icc.view.main.MainController',
        'icc.view.main.MainModel',
        'icc.view.nbr.Nbr',
        'icc.view.nbr.NbrButtonPanel',
        'icc.view.status.StatusBar',
        'icc.view.svraction.SvrAction',
        'icc.view.log.Log'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    layout: 'border',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        }
        //iconCls: 'fa-th-list'
    },

    tbar: [
        {
            xtype: 'button',
            margin: 0,
            width: 120,
            text: 'ICC Settings',
            listeners: {
                click: 'onIccSettingsClick'
            }
        }
    ],

    items: [
        {
            region: 'center',
            xtype: 'container',
            layout: 'border',
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    region: 'west',
                    border: true,
                    margin: 5,
                    flex: 4,
                    items: [
                        {
                            xtype: 'nbr.nbr',
                            //autoScroll: true,
                            flex: 1,
                            border: true,
                            forceFit: true
                            //margin: 5
                            //minWidth: 400,
                            //region: 'west'
                        },
                        {
                            xtype: 'nbr.nbrbuttonpanel'
                        }
                    ]
                },
                {
                    xtype: 'svraction.svraction',
                    flex: 1,
                    border: true,
                    margin: 5,
                    region: 'center',
                    //maxWidth: 150,
                    minWidth: 150
                    //autoScroll: true
                },
                {
                    xtype: 'log.log',
                    flex: 3,
                    border: true,
                    margin: 5,
                    //minWidth: 200,
                    region: 'east',
                    autoScroll: true
                }
            ]
        },
        {
            region: 'south',
            xtype: 'status.statusbar'
            /*
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'label',
                    margin: 5,
                    width: 120,
                    text: 'Online:'
                },
                {
                    xtype: 'label',
                    margin: 5,
                    width: 120,
                    text: 'Milestones:'
                },
                {
                    xtype: 'label',
                    margin: 5,
                    width: 120,
                    text: 'Solid Milestones:'
                }
            ]
            */
        }
    ]
});
