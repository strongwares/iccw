Ext.define('icc.view.status.StatusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.status',

    listen: {
        controller: {
            'global': {
                stopIotaSuccess: 'onStopIotaSuccess',
                startIotaFail: 'onStartIotaFail'
            }
        }
    },

    init: function (app) {
        var me = this;

        console.log(me.alias + " init");

        me.app = app;
    },

    onStopIotaSuccess: function() {
        this.setOnline(false);
    },

    onStartIotaFail: function() {
        this.setOnline(false);
    },

    setOnline: function(online) {
        var onlineLabel = this.lookupReference("onlineIcon");
        if(online) {
            onlineLabel.setCls("x-fa fa fa-check");
        }
        else {
            onlineLabel.setCls("x-fa fa fa-close");
        }
    }

});

