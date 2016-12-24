Ext.define('icc.view.config.Config', {
    extend: 'Ext.form.Panel',
    xtype: 'cfg.cfg',

    controller: 'config',
    bodyPadding: 10,
    title: 'ICC Settings',
    closable: false,
    autoShow: true,

    items: [
        {
            html: 'Neighbor RefreshTime:'
        },
        {
            xtype: 'textfield',
            name: 'nbrRefreshTime',
            allowBlank: false,
            reference: 'nbrRefreshField'
        },
        {
            html: 'Node Info Refresh Time:'
        },
        {
            xtype: 'textfield',
            name: 'nodeInfoRefreshTime',
            allowBlank: false,
            reference: 'nodeInfoRefreshField'
        },
        {
            html: 'IOTA Download Link:'
        },
        {
            xtype: 'textfield',
            name: 'iotaDownloadLink',
            allowBlank: false,
            reference: 'iotaDownloadField'
        },
        {
            xtype: 'checkboxfield',
            //padding: '10px',
            name: 'infoRefreshCheckbox',
            reference: 'infoRefresh',
            label: 'Refresh Nbr and Node Info:',
            labelWidth: '100%'
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
