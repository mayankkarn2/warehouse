using { techmartIndia as my } from '../db/data-model';

service adminService @(path: 'admin') {
    // @odata.draft.enabled
    entity Product as projection on my.Product;
    entity Warehouse as projection on my.Warehouse;
    entity Inventory as projection on my.Inventory;
}




