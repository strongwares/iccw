Ext.define('icc.Application', {
    extend: 'Ext.app.Application',

    name: 'icc',

    stores: [
        // TODO: add global / shared stores here
    ],

    /*
    views: [
        'icc.view.login.Login',
        'icc.view.log.Log',
        'icc.view.nbr.Nbr',
        'icc.view.svraction.SvrAction'
    ],
    */

    controllers: [
        'icc.controller.Global'
    ],

    launch: function () {
        var me = this,
            apiKey = localStorage.getItem(icc.controller.Global.API_KEY_PROP),
            panel;
        console.log("app launch");

        if(apiKey) {
            console.log("app launch, found apiKey");

            // modern:
            try {
                var p = Ext.create('icc.view.main.Main');
                Ext.Viewport.add(p);
            }
            catch(exc) {
                console.log("exception creating main view");
                console.dir(exc);
                /*
                Ext.create({
                    xtype: 'app-main'
                });
                */
            }

            /*
            try {
                me.fireEvent('connectSuccess');
            }
            catch(exc) {
                console.log(" connect success, exception firing event: " + exc);
            }
            */
        }
        else {
            console.log("app launch, did not find apiKey");

            panel = Ext.create('icc.view.login.Login');
            try {
                Ext.Viewport.add(panel);
            }
            catch (exc) {
            }
        }
    }
});
