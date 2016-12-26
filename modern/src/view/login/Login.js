Ext.define('icc.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'icc.view.login.LoginController'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Connect To ICCR',
    closable: false,
    autoShow: true,

    items: [
        {
            html: 'ICCR API Key:',
            xtype: 'label'
            //cls: 'x-fa fa fa-key'
        },
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            allowBlank: false,
            reference: 'apiKeyField'
        },
        {
            xtype: 'button',
            ui: 'action',
            padding: '10px',
            text: 'Connect',
            listeners: {
                tap: 'onLoginTap'
            }
        }
    ]

});
