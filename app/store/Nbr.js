Ext.define('icc.store.Nbr', {
    extend: 'Ext.data.Store',
    alias: 'store.nbr',
    storeId: 'nbrStore',
    model: 'Nbr',
    autoLoad: false,
    sorters: [
        {
            property: 'ip',
            direction: 'ASC'
        }
    ],
    proxy: {
        type: 'memory'
    }
});
