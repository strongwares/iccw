Ext.define('icc.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'icc.view.main.MainController',
        'icc.view.main.MainModel',
        'icc.view.nbr.Nbr',
        'icc.view.svraction.SvrAction',
        'icc.view.log.Log'
    ],

            controller: 'main',
            viewModel: 'main',

            defaults: {
                tab: {
                    iconAlign: 'top'
                },
                styleHtmlContent: true
            },
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Nbrs',
                    iconCls: 'fa-th-list',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'nbr.nbr'
                        }
                    ]
                },
                {
                    title: 'Action',
                    iconCls: 'fa-bolt',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'svraction.svraction'
                        }
                    ]
                },
                {
                    title: 'Console',
                    iconCls: 'fa-file',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'log.log'
                        }
                    ]
                },
                {
                    title: 'Settings',
                    iconCls: 'fa-cog',
                    items: [
                        {
                            xtype: 'cfg.cfg'
                        }
                    ]
                }
            ]
});
