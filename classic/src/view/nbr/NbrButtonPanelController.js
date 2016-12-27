Ext.define('icc.view.nbr.NbrButtonPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbrbtnpanelctlr',

    requires: [
        'icc.model.Nbr',
        'icc.store.Nbr'
    ],

    onRemoveClick: function(button) {
        var me = this;

        console.log("onRemoveClick");
    },

    onAddClick: function(button) {
        var me = this,
            newId,
            newNbr,
            btn = me.lookupReference("saveButton"),
            store = Ext.getStore('nbrStore');

        console.log("onAddClick");

        if(Ext.isEmpty(store)) {
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
        store.add(newNbr);

        if(Ext.isEmpty(btn)) {
            console.log("failed to acquire save button");
            return;
        }
        btn.enable();
    },

    onSaveClick: function(button) {
        var me = this;

        console.log("onSaveClick");
    }


});
