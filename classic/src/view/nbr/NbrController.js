Ext.define('icc.view.nbr.NbrController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbr',

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

        if(!Ext.isEmpty(me.app)) {
            return;
        }
        me.app = app;

        console.log(me.alias + " init");

        // Now get neighbors and IOTA status
        me.fireEvent('getNeighborProperties');
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
    }

});
