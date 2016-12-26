Ext.define('icc.view.nbr.NbrController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nbr',

    listen: {
        controller: {
            'global': {
                connectSuccess: 'onConnectSuccess',
                connectFail: 'onConnectFail'
            }
        }
    },

    launch: function () {
        var me = this;

        console.log(me.alias + " launch");

        // Now get neighbors and IOTA status
        me.fireEvent('getNeighborProperties');
    }


});
