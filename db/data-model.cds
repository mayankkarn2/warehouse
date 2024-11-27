using { Currency, managed, sap, cuid  } from '@sap/cds/common';

namespace techmartIndia;

entity Warehouse : managed, cuid {
  name : String(100) @title : 'WH Name';
  location : String(200) @title : 'City'; 
  capacity : Integer @title : 'Capacity';
}

entity Product : managed, cuid {
  name : String(100) @title : 'Name';
  category : String(50) @title : 'Category'; // E.g., Electronics, Clothing
  unitOfMeasure : String(10) @title : 'UoM'; // E.g., Pieces, Kilograms
  perishable : Boolean @title : 'Perishable';
  expiryDate : DateTime @title : 'Expiry Date'; // Optional for perishable items
}

entity Inventory : managed, cuid {
  warehouse : Association to Warehouse;
  product : Association to Product;
  quantity : Integer;
  minimumStockLevel : Integer;
}

entity Order : managed, cuid {

  customerName : String(100);
  orderDate : DateTime;
  orderStatus : String(20); // E.g., Pending, Fulfilled
  items : Composition of many OrderItem on items.order = $self;
}

entity OrderItem : managed, cuid {
  order : Association to Order;
  product : Association to Product;
  quantityOrdered : Integer;
  quantityFulfilled : Integer;
}

entity StockTransfer : managed, cuid {
  sourceWarehouse : Association to Warehouse;
  destinationWarehouse : Association to Warehouse;
  product : Association to Product;
  quantity : Integer;
  transferDate : DateTime;
}