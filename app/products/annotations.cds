using adminService as service from '../../srv/admin';


// annotate service.Product with @odata.draft.enabled;

annotate service.Product with @(
    
    UI.SelectionFields: [
        name,
        category,
        unitOfMeasure,
        perishable,
        expiryDate
    ],

    UI.LineItem: [
        {
            $Type : 'UI.DataField',
            Value : name,
            ![@HTML5.CssDefaults] : {
                $Type : 'HTML5.CssDefaultsType',
                width : '20rem',
            }
        },
        {
            $Type : 'UI.DataField',
            Value : category,
            ![@HTML5.CssDefaults] : {
                $Type : 'HTML5.CssDefaultsType',
                width : '20rem',
            }
        },
        {
            $Type : 'UI.DataField',
            Value : unitOfMeasure,
            ![@HTML5.CssDefaults] : {
                $Type : 'HTML5.CssDefaultsType',
                width : '20rem',
            },
        },
        {
            $Type : 'UI.DataField',
            Value : perishable,
            ![@HTML5.CssDefaults] : {
                $Type : 'HTML5.CssDefaultsType',
                width : '20rem',
            }
        },
        {
            $Type : 'UI.DataField',
            Value : expiryDate,
            ![@HTML5.CssDefaults] : {
                $Type : 'HTML5.CssDefaultsType',
                width : '20rem',
            }
        },
    ]
);
