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
        /*
        {
            xtype: '',
            name: 'passwordLabel',
            text: 'ICCR API Key:'
        },
        */
        {
            html: 'ICCR API Key:'
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
