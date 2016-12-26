Ext.define('icc.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    listen: {
        controller: {
            'global': {
                getNeighborPropertiesSuccess: 'onGetNbrPropertiesSuccess',
                getNeighborPropertiesFail: 'onGetNbrPropertiesFail'
            }
        }
    },

    init: function(app) {
        this.app = app;
        console.log(this.alias + " init");
    },

    onGetNbrPropertiesSuccess: function(nbrs) {
        var me = this;

        console.log(me.alias + " onGetNbrPropertiesSuccess");
    },

    onGetNbrPropertiesFail: function(nbrs) {
        var me = this;

        console.log(me.alias + " onGetNbrPropertiesFail");
    },

    onLoginClick: function(button) {
        var me = this,
            apiKeyField = me.lookupReference("apiKeyField"),
            apiKey;

        if (Ext.isEmpty(apiKeyField)) {
            Ext.Msg.alert("Error", "Failed to find API key field by reference");
            return;
        }
        apiKey = apiKeyField.getValue();
        console.log("on login click, api key: " + apiKey);

        if (Ext.isEmpty(apiKey)) {
            Ext.Msg.alert("Error", "API key can not be empty", Ext.emptyFn);
            return;
        }

        apiKeyField.setLoading("Connecting...");
        this.fireEvent('connectAttempt', apiKey);
    },

    onConnectSuccess: function(response) {
        var me = this,
            apiKeyField = me.lookupReference("apiKeyField");

        apiKeyField.setLoading(false);

        console.log(me.alias + ", onConnectSuccess");

        // Remove Login Window
        this.getView().destroy();

        Ext.create({
            xtype: 'app-main'
        });
    },

    onConnectFail: function(response) {
        var me = this,
            apiKeyField = me.lookupReference("apiKeyField");

        apiKeyField.setLoading(false);

        console.log(me.alias + " onConnectFail");
        Ext.Msg.alert("Error", "Failed to connect", Ext.emptyFn);
    }

});
