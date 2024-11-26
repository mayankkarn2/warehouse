using { techmartIndia as my } from '../db/data-model';

service adminService @(path: 'admin') {
    entity Product as projection on my.Product;
}



