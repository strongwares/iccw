Ext.define('icc.view.log.LogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.log',

    listen: {
        controller: {
            'global': {
                getNeighborPropertiesSuccess: 'onGetNbrPropertiesSuccess',
                getNeighborPropertiesFail: 'onGetNbrPropertiesFail'
            }
        }
    },

    onGetNbrPropertiesSuccess: function(nbrs) {
        var me = this;

        console.log(me.alias + " onGetNbrPropertiesSuccess");
    },

    onGetNbrPropertiesFail: function(nbrs) {
        var me = this;

        console.log(me.alias + " onGetNbrPropertiesFail");
    }

});
