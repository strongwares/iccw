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
                saveNbrRecordsFail: 'onSaveNbrRecordsFail'
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

    }

});
