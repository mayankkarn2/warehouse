using { techmartIndia as my } from '../db/data-model';

service adminService @(path: 'admin') {

    @Capabilities: {
        // InsertRestrictions.Insertable: false,
        SearchRestrictions : {
            $Type : 'Capabilities.SearchRestrictionsType',
            Searchable: false
        }
    }
    entity Product as projection on my.Product;
}



