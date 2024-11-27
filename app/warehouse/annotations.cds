using adminService as service from '../../srv/admin';

annotate service.Warehouse with @odata.draft.enabled;

annotate service.Warehouse with @(

    Capabilities.SearchRestrictions : {
        $Type : 'Capabilities.SearchRestrictionsType',
        Searchable: false
    },

    UI.SelectionFields : [
        name,
        location,
        capacity
    ],

    UI.LineItem: [
        {
            $Type : 'UI.DataField',
            Value : createdBy,
        },
        {
            $Type : 'UI.DataField',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Value : location,
        },
        {
            $Type : 'UI.DataField',
            Value : capacity,
        },  
    ] 
);

