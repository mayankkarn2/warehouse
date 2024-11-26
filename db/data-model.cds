using { Currency, managed, sap  } from '@sap/cds/common';

namespace techmartIndia;

entity Warehouse : managed {
  name : String(100);
  location : String(200); 
  capacity : Integer;
}

entity Product : managed {
  name : String(100) @title : 'Name';
  category : String(50) @title : 'Category'; // E.g., Electronics, Clothing
  unitOfMeasure : String(10) @title : 'UoM'; // E.g., Pieces, Kilograms
  perishable : Boolean @title : 'Perishable';
  expiryDate : DateTime @title : 'Expiry Date'; // Optional for perishable items
}

entity Inventory : managed {
  warehouse : Association to Warehouse;
  product : Association to Product;
  quantity : Integer;
  minimumStockLevel : Integer;
}

entity Order : managed {

  customerName : String(100);
  orderDate : DateTime;
  orderStatus : String(20); // E.g., Pending, Fulfilled
  items : Composition of many OrderItem on items.order = $self;
}

entity OrderItem : managed {
  order : Association to Order;
  product : Association to Product;
  quantityOrdered : Integer;
  quantityFulfilled : Integer;
}

entity StockTransfer : managed {
  sourceWarehouse : Association to Warehouse;
  destinationWarehouse : Association to Warehouse;
  product : Association to Product;
  quantity : Integer;
  transferDate : DateTime;
}

entity User : managed {
  name : String(100);
  role : String(20); // E.g., Admin, Manager, Auditor
  assignedWarehouse : Association to Warehouse; // Optional for Warehouse Managers
}