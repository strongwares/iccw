Ext.define('icc.view.svraction.SvrActionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.svraction',

    listen: {
        controller: {
            'global': {
                installIotaSuccess: 'onInstallIotaSuccess',
                installIotaFail: 'onInstallIotaFail'
            }
        }
    },

    onInstallIotaSuccess: function() {
        var me = this,
            btn;
        console.log(me.alias + " onInstallIotaSuccess");

        Ext.Viewport.setMasked(false);

        btn = me.lookupReference("installIotaButton");
        btn.enable();
    },

    onInstallIotaFail: function() {
        var me = this,
            btn;
        console.log(me.alias + " onInstallIotaFail");

        Ext.Viewport.setMasked(false);

        btn = me.lookupReference("installIotaButton");
        btn.enable();
    },

    onSettings: function(button) {
        var me = this;

        console.log("onSettings");
    },

    onInstallIota: function(button) {
        var me = this;

        console.log("onInstallIota");

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Installing...'}
        );
        button.disable();
        me.fireEvent('installIotaAction');
    },

    onStartIota: function(button) {
        var me = this;

        console.log("onStartIota");
        me.fireEvent('startIotaAction');
    },

    onStopIota: function(button) {
        var me = this;

        console.log("onStopIota");
        me.fireEvent('stopIotaAction');
    },

    onDeleteDb: function(button) {
        var me = this;

        console.log("onDeleteDb");
        me.fireEvent('deletedbIotaAction');
    },

    onUninstallIota: function(button) {
        var me = this;

        console.log("onUninstallIota");
        me.fireEvent('deleteIotaAction');
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

