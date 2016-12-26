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
        'icc.view.svraction.SvrAction',
        'icc.view.log.Log'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    //ui: 'navigation',

    /*
    layout: {
        type: 'hbox',
        align: 'stretch',
        margin: 5
    },
    */

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

    /*
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },
    */

    /*
    defaults: {
        //bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'top',
                    textAlign: 'top'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    */

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
        /*
        {
            xtype: 'menubar',
            items: [
                {
                    xtype: 'button',
                    margin: 5,
                    width: 120,
                    text: 'ICC Settings',
                    listeners: {
                        click: 'onIccSettingsClick'
                    }
                },
                {
                    text: "Servers",
                    menu: [
                        {
                            text: 'Add New Server...'
                        },
                        {
                            text: 'Manage...'
                        }
                    ]
                }
            ]
        }
        */
    ],

    items: [
        {
            region: 'center',
            xtype: 'container',
            //layout: 'hbox',
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
                            autoScroll: true,
                            flex: 1,
                            border: true,
                            forceFit: true
                            //margin: 5
                            //minWidth: 400,
                            //region: 'west'
                        },
                        {
                            xtype: 'nbr.nbrbuttonpanel'
                            //html: 'hello'
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
                    region: 'east'
                    //autoScroll: true
                }
                /*
                 {
                 title: 'Settings',
                 iconCls: 'fa-cog',
                 flex: 2,
                 bind: {
                 //html: '{loremIpsum}'
                 html: 'Settings...'
                 }
                 }
                 */
                /*
                 {
                 title: 'Home',
                 iconCls: 'fa-home',
                 // The following grid shares a store with the classic version's grid as well!
                 items: [{
                 xtype: 'mainlist'
                 }]
                 },
                 {
                 title: 'Users',
                 iconCls: 'fa-user',
                 bind: {
                 html: '{loremIpsum}'
                 }
                 },
                 {
                 title: 'Groups',
                 iconCls: 'fa-users',
                 bind: {
                 html: '{loremIpsum}'
                 }
                 },
                 {
                 title: 'Settings',
                 iconCls: 'fa-cog',
                 bind: {
                 html: '{loremIpsum}'
                 }
                 }
                 */
            ]
        },
        {
            region: 'south',
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
        }
    ],

    dbbar: [
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
});
