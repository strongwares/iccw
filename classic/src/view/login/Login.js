Ext.define('icc.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'icc.view.login.LoginController'
    ],

    controller: 'login',
    bodyPadding: 5,
    title: 'Connect To ICCR',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'password',
                reference: 'apiKeyField',
                inputType: 'password',
                fieldLabel: 'ICCR API Key',
                allowBlank: false,
                labelWidth: 100
            }
        ],
        buttons: [
            {
                text: 'Connect',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ]
    }
});
