Ext.define('icc.view.config.ConfigController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.config',

    /*
    listen: {
        controller: {
            'global': {
                connectSuccess: 'onConnectSuccess',
                connectFail: 'onConnectFail'
            }
        }
    },
    */

    init: function(app) {
        this.app = app;
        console.log(this.alias + " init");
    },

    onSaveTap: function() {
        var me = this,
            nbrRefreshField = me.lookupReference("nbrRefreshField"),
            nodeInfoRefreshField = me.lookupReference("nodeInfoRefreshField"),
            iotaDldLinkField = me.lookupReference("iotaDownloadField");

        console.log("on save tap");
    }
});

