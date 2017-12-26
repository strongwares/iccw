Ext.define('icc.view.nbr.NbrButtonPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbrbtnpanelctlr',

    requires: [
        'icc.model.Nbr',
        'icc.store.Nbr'
    ],

    listen: {
        controller: {
            'global': {
                getNeighborPropertiesSuccess: 'onGetNeighborPropertiesSuccess',
                getNeighborPropertiesFail: 'onGetNeighborPropertiesFail',
                saveNbrRecordsSuccess: 'onSaveNbrRecordsSuccess',
                saveNbrRecordsFail: 'onSaveNbrRecordsFail'
            }
        }
    },

    init: function(app) {
        var me = this;
        me.app = app;
        console.log(me.alias + " init");

        /*
        me.grid = me.lookupReference("nbrGrid");
        if(Ext.isEmpty(me.grid)) {
            console.log(me.alias + " failed to get nbr grid ref");
        }
        else {
            me.grid.on('edit', me.onNbrGridEdit);
            me.grid.on('selectionchange', me.onGridSelectionChange);
        }
        */

        // This is the storeId:
        me.store = Ext.getStore('nbrStore');
    },

    onGetNeighborPropertiesSuccess: function(props) {
        var me = this;

        me.getGridRef();
    },

    onGetNeighborPropertiesFail: function(props) {
        var me = this;

        me.getGridRef();
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

    onRemoveClick: function(button) {
        var me = this,
            what,
            removeBtn = me.lookupReference("removeButton"),
            saveBtn = me.lookupReference("saveButton");


        console.log("onRemoveClick");
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

    getGridRef: function() {
        var me = this;
        if(Ext.isEmpty(me.grid)) {
            me.grid = Ext.getCmp('nbrGrid'); //me.lookupReference("nbrGridRef");
            if (Ext.isEmpty(me.grid)) {
                console.log(me.alias + " failed to get grid ref");
            }
            else {
                me.grid.on('edit', me.onNbrGridEdit, me);
                me.grid.on('selectionchange', me.onGridSelectionChange, me);
            }
        }
    },

    onAddClick: function(button) {
        var me = this,
            newId,
            newNbr,
            btn = me.lookupReference("saveButton");
            //store = Ext.getStore('nbrStore');

        console.log("onAddClick");

        if(Ext.isEmpty(me.store)) {
            console.log(me.alias + " failed to acquire nbrStore");
            return;
        }

        if(Ext.isEmpty(me.grid)) {
            me.getGridRef();
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

        if(Ext.isEmpty(btn)) {
            console.log("failed to acquire save button");
            return;
        }
        btn.enable();
    },

    onSaveClick: function(button) {
        var me = this,
            nbrs;

        console.log("onSaveClick");

        me.fireEvent('saveNbrRecords', me.store.getRange());
    },

    onSaveNbrRecordsSuccess: function() {
        var me = this,
            saveBtn = me.lookupReference("saveButton");

        console.log(me.alias + " on save nbr records success");
        saveBtn.disable();
    },

    onSaveNbrRecordsFail: function(msg) {
        var me = this;
        console.log(me.alias + " on save nbr records fail");

        Ext.Msg.alert("Save Neighbors Failure", msg, Ext.emptyFn);
    }


});
