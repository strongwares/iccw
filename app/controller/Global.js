Ext.define('icc.controller.Global', {
    extend: 'Ext.app.Controller',
    alias: 'controller.global',

    listen: {
        controller: {
            '*': {
                getIotaStatus: 'onGetIotaStatus',
                connect: 'onConnect'
            }
        }
    },

    init: function(app) {
        this.app = app;
        console.log("controller.global init");
    },

    genHeaders: function(op, method) {
        return header = {
            'ICCR-API-KEY': this.apiKey,
            'content-type': 'application/json'
        };
    },

    onConnect: function(apiKey) {
        var me = this;
        me.apiKey = apiKey;
        console.log(me.alias + " onConnect: " + apiKey);

        if(true) {
            this.fireEvent('connectSuccess', 'happy');
            return;
        }

        Ext.Ajax.request({
            url:  "../iccr/rs/iota/cmd/status",
            method: 'POST',
            headers: me.genHeaders('getIotaStatus', 'POST'),
            success: function(response) {
                console.log("connect getIotaStatus success: ");
                console.dir(response);
                try {
                    this.fireEvent('connectSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {
                    console.log(this.alias + " connect success, exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("connect getIotaStatus failure: ");
                console.dir(response);
                try {
                    this.fireEvent('connectFail');
                }
                catch(exc) {
                    console.log(this.alias + " connect failure, exception firing event: " + exc);
                }
            },
            scope: me
        });
    },

    onGetIotaStatus: function() {
        var me = this;
        console.log(me.alias + " getIotaStatus");

        Ext.Ajax.request({
            url:  "../iccr/rs/iota/cmd/status",
            method: 'POST',
            headers: me.genHeaders('getIotaStatus', 'POST'),
            success: function(response) {
                console.log("getIotaStatus success: ");
                console.dir(response);
                try {
                    this.fireEvent('getIotaStatusSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {

                }
            },
            failure: function(response) {
                console.log("getIotaStatus failure: ");
                console.dir(response);
                try {
                    this.fireEvent('getIotaStatusFail');
                }
                catch(exc) {
                    console.log(this.alias + " exception firing event: " + exc);
                }
            },
            scope: me
        });
    }

});
