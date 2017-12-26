Ext.define('icc.view.log.LogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.log',

    requires: [
        'icc.model.Log',
        'icc.store.ConsoleLog'
    ],

    listen: {
        controller: {
            'global': {
                getNeighborPropertiesSuccess: 'onGetNbrPropertiesSuccess',
                getNeighborPropertiesFail: 'onGetNbrPropertiesFail',
                saveNbrRecordsSuccess: 'onSaveNbrRecordsSuccess',
                saveNbrRecordsFail: 'onSaveNbrRecordsFail',
                startIotaFail: 'onStartIotaFail',
                stopIotaFail: 'onStopIotaFail',
                installIotaFail: 'onInstallIotaFail',
                deleteIotaFail: 'onDeleteIotaFail',
                deletedbIotaFail: 'onDeleteDbIotaFail'
            }
        }
    },

    init: function(app) {
        var me = this;

        me.app = app;

        console.log(me.alias + " init");

        // This is the storeId:
        me.store = Ext.getStore('consoleLog');

        /*
         me.store.on({
         add: me.onStoreRecordAdd,
         remove: me.onStoreRecordRemove,
         scope: me
         });
         */
    },


    onGetNbrPropertiesSuccess: function(nbrs) {
        var me = this;

        console.log(me.alias + " onGetNbrPropertiesSuccess");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Loaded IOTA neighbor properties'
        });
    },

    onGetNbrPropertiesFail: function(nbrs) {
        var me = this;

        console.log(me.alias + " onGetNbrPropertiesFail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to load IOTA neighbor properties'
        });
    },

    onSaveNbrRecordsSuccess: function() {
        var me = this;
        console.log(me.alias + " on save nbr records success");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Saved updated IOTA neighbors'
        });
    },

    onSaveNbrRecordsFail: function(msg) {
        var me = this;
        console.log(me.alias + " on save nbr records fail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to save IOTA neighbors'
        });

    },

    onStartIotaFail: function(msg) {
        var me = this;
        console.log(me.alias + " on start iota fail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to start IOTA'
        });

    },

    onStopIotaFail: function(msg) {
        var me = this;
        console.log(me.alias + " on stop iota fail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to stop IOTA'
        });

    },

    onInstallIotaFail: function(msg) {
        var me = this;
        console.log(me.alias + " on install iota fail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to install IOTA'
        });
    },

    onDeleteIotaFail: function(msg) {
        var me = this;
        console.log(me.alias + " on delete iota fail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to uninstall IOTA'
        });
    },

    onDeleteDbIotaFail: function(msg) {
        var me = this;
        console.log(me.alias + " on delete db iota fail");

        me.store.add({
            id: (new Date()).getTime(),
            line: 'Failed to delete IOTA DB'
        });
    }


});
