Ext.define('icc.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    listen: {
        controller: {
            'global': {
                connectSuccess: 'onConnectSuccess',
                connectFail: 'onConnectFail'
            }
        }
    },

    init: function(app) {
        this.app = app;
        console.log(this.alias + " init");
    },

    onLoginTap: function() {
        var me = this,
            apiKeyField = me.lookupReference("apiKeyField"),
            apiKey;

        if (Ext.isEmpty(apiKeyField)) {
            Ext.Msg.alert("Error", "Failed to find API key field by reference");
            return;
        }
        apiKey = apiKeyField.getValue();
        console.log("on login tap, api key: " + apiKey);

        if (Ext.isEmpty(apiKey)) {
            Ext.Msg.alert("Error", "API key can not be empty", Ext.emptyFn);
            return;
        }

        //apiKeyField.setLoading("Connecting...");
        Ext.Viewport.mask({xtype: 'loadmask', message: 'Connecting...'});
        this.fireEvent('connect', apiKey);
    },

    onConnectSuccess: function(response) {
        var me = this,
            apiKeyField = me.lookupReference("apiKeyField");

        Ext.Viewport.unmask();

        console.log(me.alias + ", onConnectSuccess");

        // Remove Login Window
        me.getView().destroy();

        // Add the main view to the viewport
        Ext.Viewport.add(Ext.create('icc.view.main.Main'));
    },

    onConnectFail: function(response) {
        var me = this,
            apiKeyField = me.lookupReference("apiKeyField");

        Ext.Viewport.unmask();

        Ext.Msg.alert("Error", "Failed to connect", Ext.emptyFn);
    },

    onGetIotaStatusSuccess: function(response) {
        var me = this;
    },

    onGetIotaStatusFail: function(response) {
        var me = this;
    }
});

