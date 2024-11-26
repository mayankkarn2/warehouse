using adminService as service from '../../srv/admin';
annotate service.Product with @(

    UI.SelectionFields           : [
        name,
        category,
        unitOfMeasure,
        perishable,
        expiryDate
    ],


    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'category',
                Value : category,
            },
            {
                $Type : 'UI.DataField',
                Label : 'unitOfMeasure',
                Value : unitOfMeasure,
            },
            {
                $Type : 'UI.DataField',
                Label : 'perishable',
                Value : perishable,
            },
            {
                $Type : 'UI.DataField',
                Label : 'expiryDate',
                Value : expiryDate,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Category',
            Value : category,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Unit of Measure',
            Value : unitOfMeasure,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Perishable',
            Value : perishable,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Expiry Date',
            Value : expiryDate,
        },
    ],

    UI.HeaderInfo :{
        TypeName : 'Product',
        TypeNamePlural : 'Products'
    }
);

