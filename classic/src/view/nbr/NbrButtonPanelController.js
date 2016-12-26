Ext.define('icc.view.nbr.NbrButtonPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbrbtnpanelctlr',

    requires: [
        'icc.store.Nbr'
    ],

    stores: [
        'Nbr'
    ],

    onRemoveClick: function(button) {
        var me = this;

        console.log("onRemoveClick");
    },

    onAddClick: function(button) {
        var me = this,
            store = Ext.StoreManager.lookup('nbrStore');
            //store = me.getIccStoreNbrStore();

        var newId = (new Date()).getTime();
        var newNbr = {
            id: newId
        };
        store.add(newNbr);

        console.log("onAddClick");
    },

    onSaveClick: function(button) {
        var me = this;

        console.log("onSaveClick");
    }


});
