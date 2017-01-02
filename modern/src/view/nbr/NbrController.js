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
                getNeighborPropertiesFail: 'onGetNeighborPropertiesFail',
                saveNbrRecordsError: 'onSaveNbrRecordsError',
                saveNbrRecordsSuccess: 'onSaveNbrRecordsSuccess',
                saveNbrRecordsFail: 'onSaveNbrRecordsFail'
            }
        }
    },

    init: function (app) {
        var me = this;

        console.log(me.alias + " init");

        me.app = app;
        me.store = Ext.getStore('nbrStore');
        /*
        me.store.on({
            add: me.onNbrStoreRecordAdd,
            remove: me.onNbrStoreRecordRemove,
            scope: me
        });
        */

        /*
        me.grid = me.lookupReference("nbrGrid");
        if(Ext.isEmpty(me.grid)) {
            console.log(me.alias + " failed to get nbr grid ref");
        }
        me.grid.on('edit', me.onNbrGridEdit);
        me.grid.on('selectionchange', me.onGridSelectionChange);
        */

        // Now get neighbors and IOTA status
        me.fireEvent('getNeighborProperties');
    },

    launch: function () {
        var me = this;

        console.log(me.alias + " launch");

        // Now get neighbors and IOTA status
        //me.fireEvent('getNeighborProperties');
    },

    getGridRef: function() {
        var me = this;
        if(Ext.isEmpty(me.grid)) {
            me.grid = me.lookupReference("nbrGrid");
            if(Ext.isEmpty(me.grid)) {
                console.log(me.alias + " failed to get nbr grid ref");
            }
            else {
                me.grid.on('edit', me.onNbrGridEdit, me);
                me.grid.on('selectionchange', me.onGridSelectionChange, me);
            }
        }
    },

    onGridSelectionChange: function(grid, records) {
        var me = this,
            removeButton = me.lookupReference("removeButton");

        console.log(me.alias + " on nbr grid selection change");

        if(records && records.length) {
            removeButton.enable();
        }
        else {
            removeButton.disable();
        }
        me.selectedRecords = records;
    },

    onNbrGridEdit: function(editor, evt) {
        var me = this,
            btn = me.lookupReference("saveButton");
        console.log(me.alias + " on nbr grid edit");

        evt.record.commit();
        btn.enable();
    },

    onGetNeighborPropertiesSuccess: function(props) {
        var me = this;

        if(Ext.isEmpty(me.grid)) {
            me.getGridRef();
        }

        console.log(me.alias + " onGetNeighborPropertiesSuccess:");
        console.dir(props);

        if(Ext.isEmpty(props) || Ext.isEmpty(props.nbrs)) {
            return;
        }
        for(i = 0; i < props.nbrs.length; i++) {
            nbr = props.nbrs[i];
            me.store.add({
                id: nbr.key,
                at: nbr.numAt,
                it: nbr.numIt,
                nt: nbr.numNt,
                active: nbr.active,
                nbr: nbr.uri,
                descr: nbr.descr
            });
        }
    },

    onGetNeighborPropertiesFail: function(resp) {
        var me = this;

        if(Ext.isEmpty(me.grid)) {
            me.getGridRef();
        }

        console.log(me.alias + " onGetNeighborPropertiesFail:");
        console.dir(resp);
    },

    onSaveNbrRecordsError: function(msg) {
        var me = this;

        console.log(me.alias + " onSaveNbrRecordsError:");
        console.dir(msg);

        Ext.Msg.alert("Save Neighbors Error", msg, Ext.emptyFn);
    },

    onRemoveTap: function() {
        var me = this,
            what,
            removeBtn = me.lookupReference("removeButton"),
            saveBtn = me.lookupReference("saveButton");

        console.log("onRemoveTap");

        if(Ext.isEmpty(me.selectedRecords) || me.selectedRecords.length === 0) {
            Ext.Msg.alert("Remove Neighbors Error", "Please select a neighbor first", Ext.emptyFn);
        }
        else {
            what = me.selectedRecords.length == 1 ? "that neighbor" : "those neighbors";
            Ext.Msg.confirm("Remove Neighbor?", "Are you sure you want to remove " + what + "?",
                function(btn) {
                    if(!Ext.isEmpty(btn) && btn == 'yes') {
                        console.log("removing neighbors...");
                        this.store.remove(this.selectedRecords);
                        this.selectedRecords = undefined;
                        saveBtn.enable();
                        removeBtn.disable();
                    }
                    else {
                        console.log("not removing neighbors");
                    }
                },
                me
            );
        }
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
            descr: ''
        };
        me.store.insert(0, newNbr);

        //me.grid.plugins[0].startEdit(0, 3);

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

        me.fireEvent('saveNbrRecords', me.store.getRange());
    },

    onSaveNbrRecordsSuccess: function() {
        var me = this;
        console.log(me.alias + " on save nbr records success");

    },

    onSaveNbrRecordsFail: function(msg) {
        var me = this;
        console.log(me.alias + " on save nbr records fail");

        Ext.Msg.alert("Save Neighbors Failure", msg, Ext.emptyFn);

    }

});
