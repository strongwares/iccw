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
                saveNbrRecords: 'onSaveNbrRecords',
                getIccrProperties: 'onGetIccrProperties',
                getIccrProperties: 'onGetIccrProperties',
                installIotaAction: 'onInstallIotaAction',
                deleteIotaAction: 'onDeleteIotaAction',
                startIotaAction: 'onStartIotaAction',
                stopIotaAction: 'onStopIotaAction',
                deleteDbIotaAction: 'onDeleteDbIotaAction'
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

        if(true) {
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

    onInstallIotaAction: function() {
        this.doIotaAction("install");
    },

    onDeleteIotaAction: function() {
        this.doIotaAction("delete");
    },

    onStartIotaAction: function() {
        this.doIotaAction("start");
    },

    onStopIotaAction: function() {
        this.doIotaAction("stop");
    },

    onDeleteDbIotaAction: function() {
        this.doIotaAction("deletedb");
    },

    doIotaAction: function(action) {
        var me = this;
        console.log(me.alias + " doIotaAction(" + action + ")");

        Ext.Ajax.request({
            url:  "../iccr/rs/iota/cmd/" + action,
            method: 'POST',
            headers: me.genHeaders('doIotaAction', 'POST'),
            success: function(response) {
                console.log("doIotaAction success: ");
                console.dir(response);
                try {
                    this.fireEvent(action + 'IotaSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {
                    console.log(this.alias + " doIotaAction success exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("doIotaAction failure: ");
                console.dir(response);
                try {
                    this.fireEvent(action + 'IotaFail');
                }
                catch(exc) {
                    console.log(this.alias + " doIotaActionFail exception firing event: " + exc);
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
                if(response.status == 401) {
                    console.log("unauth response!");
                    this.redirToLogin();
                }
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
    },

    onSaveNbrRecords: function(records) {
        var me = this,
            payload = { nbrs: [] },
            i, nbr, rec, msg;
        console.log(me.alias + " on save nbr records");

        if(!records) { //} || records.length === 0) {
            me.fireEvent("saveNbrRecordsError", "No neighbor records were found");
            return;
        }

        for(i = 0; i < records.length; i++) {
            rec = records[i];
            console.log("nbr: ");
            console.dir(rec);
            nbr = rec.get('nbr');
            if(Ext.isEmpty(nbr)) {
                msg = "Unable to save empty neighbor address";
            }
            payload.nbrs.push({
                active: rec.get('active'),
                descr: rec.get('descr'),
                uri: nbr,
                key: rec.get('id'),
                numAt: 0,
                numIt: 0,
                numNt: 0
            })
        }
        if(!Ext.isEmpty(msg)) {
            me.fireEvent("saveNbrRecordsError", "No neighbor records were found");
            return;
        }
        me.putNbrUpdate(payload);
    },

    putNbrUpdate: function(payload) {
        var me = this;
        console.log(me.alias + " putNbrUpdate");
        console.dir(payload);

        Ext.Ajax.request({
            url:  "../iccr/rs/app/config/iota/nbrs",
            method: 'PUT',
            headers: me.genHeaders('putNbrUpdate', 'PUT'),
            jsonData: payload,
            success: function(response) {
                console.log("putNbrUpdate success: ");
                console.dir(response);
                try {
                    this.fireEvent('saveNbrRecordsSuccess', JSON.parse(response.responseText));
                }
                catch(exc) {
                    console.log(this.alias + " putNbrUpdate success exception firing event: " + exc);
                }
            },
            failure: function(response) {
                console.log("putNbrUpdate failure: ");
                console.dir(response);
                try {
                    this.fireEvent('saveNbrRecordsFail');
                }
                catch(exc) {
                    console.log(this.alias + " saveNbrRecordsFail exception firing event: " + exc);
                }
            },
            scope: me
        });
    },

    redirToLogin: function() {
        var panel = Ext.create('icc.view.login.Login');
        try {
            Ext.Viewport.add(panel);
        }
        catch (exc) {
        }
    }

});
