Ext.define('icc.Application', {
    extend: 'Ext.app.Application',

    name: 'icc',

    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
        'icc.view.login.Login',
        'icc.view.log.Log',
        'icc.view.nbr.Nbr',
        'icc.view.svraction.SvrAction'
    ],

    controllers: [
        'icc.controller.Global'
    ],

    launch: function () {
        console.log("app launch");

        //Ext.setGlyphFontFamily('FontAwesome');

        var panel = Ext.create('icc.view.login.Login');
        try {
            Ext.Viewport.add(panel);
        }
        catch(exc) {    }
    }
});
