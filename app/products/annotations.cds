using adminService as service from '../../srv/admin';

annotate service.Product with @(
    
    UI.SelectionFields: [
        name,
        category,
        unitOfMeasure,
        perishable,
        expiryDate
    ]
);
