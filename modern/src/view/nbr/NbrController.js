Ext.define('icc.view.nbr.NbrController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbr',

    onRemoveTap: function() {
        var me = this;

        console.log("onRemoveTap");
    },

    onAddTap: function() {
        var me = this;

        console.log("onAddTap");
    },

    onSaveTap: function() {
        var me = this;

        console.log("onSaveTap");
    }

});
