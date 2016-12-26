Ext.define('icc.view.nbr.NbrButtonPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbrbtnpanelctlr',

    onRemoveClick: function(button) {
        var me = this;

        console.log("onRemoveClick");
    },

    onAddClick: function(button) {
        var me = this;

        console.log("onAddClick");
    },

    onSaveClick: function(button) {
        var me = this;

        console.log("onSaveClick");
    }


});
