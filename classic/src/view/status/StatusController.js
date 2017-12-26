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
        if(Ext.isEmpty(onlineLabel)) {
            console.log("failed to acquire online label");
        }
        //console.log(onlineLabel.getCls());
        if(online) {
            onlineLabel.removeCls("fa-question");
            onlineLabel.removeCls("fa-close");
            onlineLabel.addCls("fa-check");
        }
        else {
            onlineLabel.removeCls("fa-question");
            onlineLabel.removeCls("fa-check");
            onlineLabel.addCls("fa-close");
        }
    }

});
