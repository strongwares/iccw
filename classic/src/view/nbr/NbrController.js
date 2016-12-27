Ext.define('icc.view.nbr.NbrController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbr',

    requires: [
        'icc.model.Nbr',
        'icc.store.Nbr'
    ],

    listen: {
        controller: {
            'global': {
                getNeighborPropertiesSuccess: 'onGetNeighborPropertiesSuccess',
                getNeighborPropertiesFail: 'onGetNeighborPropertiesFail'
            }
        }
    },

    init: function (app) {
        var me = this;

        console.log(me.alias + " init");

        me.app = app;
        me.store = Ext.getStore('nbrStore');
        me.store.on({
            add: me.onNbrStoreRecordAdd,
            remove: me.onNbrStoreRecordRemove,
            scope: me
        });

        // Now get neighbors and IOTA status
        me.fireEvent('getNeighborProperties');
    },

    onNbrStoreRecordAdd: function(store, rec) {
        var me = this;
        console.log("onNbrStoreRecordAdd");
    },

    onNbrStoreRecordRemove: function(store, rec) {
        var me = this;
        console.log("onNbrStoreRecordRemove");
    },

    onGetNeighborPropertiesSuccess: function(props) {
        var me = this;

        console.log(me.alias + " onGetNeighborPropertiesSuccess:");
        console.dir(props);
    },

    onGetNeighborPropertiesFail: function(resp) {
        var me = this;

        console.log(me.alias + " onGetNeighborPropertiesFail:");
        console.dir(resp);

        /*
        if(Ext.isEmpty(me.store)) {
            console.log("failed to acquire nbr store");
        }
        else {
            var newId = (new Date()).getTime();
            var newNbr = {
                id: newId,
                at: 0,
                it: 0,
                nt: 0,
                nbr: 'udp://0.0.0.0:14266',
                descr: 'bill'
            };
            me.store.add(newNbr)
        }
        */
    }

});