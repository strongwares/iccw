Ext.define('icc.view.svraction.SvrActionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.svraction',

    onSettings: function(button) {
        var me = this;

        console.log("onSettings");
    },

    onInstallIota: function(button) {
        var me = this;

        console.log("onInstallIota");
    },

    onStartIota: function(button) {
        var me = this;

        console.log("onStartIota");
    },

    onStopIota: function(button) {
        var me = this;

        console.log("onStopIota");
    },

    onDeleteDb: function(button) {
        var me = this;

        console.log("onDeleteDb");
    },

    onUninstallIota: function(button) {
        var me = this;

        console.log("onUninstallIota");
    },

    onIccrEventLog: function(button) {
        var me = this;

        console.log("onIccrEventLog");
    },

    onIotaLog: function(button) {
        var me = this;

        console.log("onIotaLog");
    }

});

