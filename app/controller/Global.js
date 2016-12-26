Ext.define('icc.controller.Global', {
    extend: 'Ext.app.Controller',
    alias: 'controller.global',

    statics: {
        API_KEY_PROP: 'apiKey',
        fireLoginSuccess: function() {

        },
        fireLoginFail: function(msg) {

        }
    },

    listen: {
        controller: {
            '*': {
                connectAttempt: 'onConnectAttempt',
                getIotaStatus: 'onGetIotaStatus',
                getNeighborProperties: 'onGetNbrProperties',
                getIccrProperties: 'onGetIccrProperties',
                getIccrProperties: 'onGetIccrProperties'
            }
        }
    },

    init: function(app) {
        this.app = app;
        console.log("controller.global init");
    },

    storeApiKey: function(apiKey) {
        this.apiKey = apiKey;
        localStorage.setItem(icc.controller.Global.API_KEY_PROP, apiKey);
    },

    clearApiKey: function() {
        delete this.apiKey;
        localStorage.removeItem(icc.controller.Global.API_KEY_PROP);
    },

    genHeaders: function(op, method) {
        return header = {
            'ICCR-API-KEY': this.apiKey,
            'content-type': 'application/json'
        };
    },

    onConnectAttempt: function(apiKey) {
        var me = this;
        me.apiKey = apiKey;
        console.log(me.alias + " onConnectAttempt: " + apiKey);

        if(false) {
            me.storeApiKey(apiKey);
            this.fireEvent('connectSuccess',  'happy');
            return;
        }

        Ext.Ajax.request({
            url:  "../iccr/rs/icc/languages",
            method: 'GET',
            headers: me.genHeaders('getLanguageChoices', 'GET'),
            success: function(response) {
                this.storeApiKey(apiKey);
                console.log("connect getLanguageChoices success: ");
                console.dir(response);
                try {
                    this.fireEvent('connectSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {
                    console.log(this.alias + " connect getLanguageChoices success, exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("connect getLanguageChoices failure: ");
                console.dir(response);
                this.clearApiKey();
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
                    console.log(this.alias + " getIotaStatus success exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("getIotaStatus failure: ");
                console.dir(response);
                try {
                    this.fireEvent('getIotaStatusFail');
                }
                catch(exc) {
                    console.log(this.alias + " getIotaStatusFail exception firing event: " + exc);
                }
            },
            scope: me
        });
    },

    onGetNbrProperties: function() {
        var me = this;
        console.log(me.alias + " getNbrProperties");

        Ext.Ajax.request({
            url:  "../iccr/rs/app/config/iota/nbrs",
            method: 'GET',
            headers: me.genHeaders('getNeighborProperties', 'GET'),
            success: function(response) {
                console.log("getNeighborProperties success: ");
                console.dir(response);
                try {
                    this.fireEvent('getNeighborPropertiesSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {
                    console.log(this.alias + " getNeighborProperties success exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("getNeighborProperties failure: ");
                console.dir(response);
                try {
                    this.fireEvent('getNeighborPropertiesFail');
                }
                catch(exc) {
                    console.log(this.alias + " getNeighborPropertiesFail exception firing event: " + exc);
                }
            },
            scope: me
        });
    },

    onGetIccrProperties: function() {
        var me = this;
        console.log(me.alias + " getIccrProperties");

        Ext.Ajax.request({
            url:  "../iccr/rs/app/config",
            method: 'GET',
            headers: me.genHeaders('getIccrProperties', 'GET'),
            success: function(response) {
                console.log("getIccrProperties success: ");
                console.dir(response);
                try {
                    this.fireEvent('getIccrPropertiesSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {
                    console.log(this.alias + " getIccrProperties success exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("getIccrProperties failure: ");
                console.dir(response);
                try {
                    this.fireEvent('getIccrPropertiesFail');
                }
                catch(exc) {
                    console.log(this.alias + " getIccrPropertiesFail exception firing event: " + exc);
                }
            },
            scope: me
        });
    }

});
