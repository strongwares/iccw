Ext.define('icc.model.Nbr', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id',      type: 'string' },
        { name: 'at',      type: 'int' },
        { name: 'it',      type: 'int' },
        { name: 'nt',      type: 'int' },
        { name: 'active',  type: 'boolean' },
        { name: 'nbr',      type: 'string' },
        { name: 'descr',   type: 'string' }
    ]

});

