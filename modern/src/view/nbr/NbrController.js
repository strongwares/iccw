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

    launch: function () {
        var me = this;

        console.log(me.alias + " launch");

        // Now get neighbors and IOTA status
        //me.fireEvent('getNeighborProperties');
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
    },

    onRemoveTap: function() {
        var me = this;

        console.log("onRemoveTap");
    },

    onAddTap: function() {
        var me = this,
            newId,
            newNbr,
            btn;
        console.log("onAddTap");

        if(Ext.isEmpty(me.store)) {
            console.log("failed to create nbrStore");
            return;
        }

        newId = (new Date()).getTime();
        newNbr = {
            id: newId,
            at: 0,
            it: 0,
            nt: 0,
            nbr: 'udp://0.0.0.0:14266',
            descr: 'fred'
        };
        me.store.add(newNbr);

        btn = me.lookupReference("saveButton");
        if(Ext.isEmpty(btn)) {
            console.log("failed to acquire save button");
            return;
        }
        btn.enable();
    },

    onSaveTap: function() {
        var me = this;

        console.log("onSaveTap");
    }

});
