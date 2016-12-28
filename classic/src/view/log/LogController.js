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
                getNeighborPropertiesFail: 'onGetNbrPropertiesFail'
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

    /*
    onStoreRecordAdd: function() {
        var me = this;
        console.log(me.alias + " on store record add");
    },

    onStoreRecordRemove: function() {
        var me = this;
        console.log(me.alias + " on store record remove");
    },
    */

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
        if(Ext.isEmpty(me.store)) {
            console.log(me.alias + " store not found");
        }
        else {
            me.store.add({
                id: (new Date()).getTime(),
                line: 'Failed to load IOTA neighbor properties'
            });
        }
    }

});
