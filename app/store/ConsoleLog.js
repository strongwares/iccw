Ext.define('icc.store.ConsoleLog', {
    extend: 'Ext.data.Store',
    alias: 'store.consolelog',
    storeId: 'consoleLogStore',
    model: 'icc.model.Log',
    autoLoad: false,
    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ],
    proxy: {
        type: 'memory'
    }
});
