Ext.define('icc.util.Util', {
    singleton: true,

    requires: [
        'icc.util.Constants'
    ],

    getIccrProperties: function(successCallback, failCallback) {
        console.log("getIccrProperties");
    },

    getIotaStatus: function(successCallback, failCallback) {
        console.log("getIotaStatus");

        Ext.Ajax.request({
            url:  "https://localhost:14266/iota/cmd/status", //icc.util.Constants.IOTA_STATUS_URL,
            method: 'POST',
            success: function(response) {
                console.log("getIotaStatus success: ");
                console.dir(response);
                successCallback(JSON.parse(response.responseText));
            },
            failure: function(response) {
                console.log("getIotaStatus failure: ");
                console.dir(response);
                failCallback(JSON.parse(response.responseText));
            }
        });
    }

});
