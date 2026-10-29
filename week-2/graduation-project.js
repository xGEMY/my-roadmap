/*
const sales = [
  { medicine: "Panadol", price: 50, quantity: 3, customer: "Ahmed" },
  { medicine: "Augmentin", price: 120, quantity: 2, customer: "Mona" },
  { medicine: "Panadol", price: 50, quantity: 5, customer: "Khaled" },
  { medicine: "Cataflam", price: 80, quantity: 1, customer: "Sara" },
  { medicine: "Brufen", price: 60, quantity: 7, customer: "Ali" }
];

getTotalRevenue()
getTotalUnits()
getLargestSale()
getSalesAboveQuantity(limit)
getMedicineNames()
getFormattedSales()
*/

const sales = [
  { medicine: "Panadol", price: 50, quantity: 3, customer: "Ahmed" },
  { medicine: "Augmentin", price: 120, quantity: 2, customer: "Mona" },
  { medicine: "Panadol", price: 50, quantity: 5, customer: "Khaled" },
  { medicine: "Cataflam", price: 80, quantity: 1, customer: "Sara" },
  { medicine: "Brufen", price: 60, quantity: 7, customer: "Ali" }
];


let totalRevenue = () => sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);
console.log(totalRevenue());

let totalUnite = () => sales.reduce((total, sale) => total + sale.quantity, 0);
console.log(totalUnite());

let largestSale = () => sales.reduce((max, sale) => sale.price * sale.quantity > max.price * max.quantity? sale : max);
console.log(largestSale());

let salesAboveQuantity = (limit) => sales.filter(sale => sale.quantity > limit);
console.log(salesAboveQuantity(4));

let medicinName = () => sales.forEach(sale => console.log(sale.medicine));
medicinName();

let formattedSales = () => sales.map(sale => `name : ${sale.medicine} - Quantity : ${sale.quantity} - total price : $${sale.quantity * sale.price}`);
console.log(formattedSales());

/*---------------------------*/

/*Build a Pharmacy Stock Report from:

const medicines = [
  { name: "Panadol", price: 50, quantity: 10 },
  { name: "Augmentin", price: 120, quantity: 5 },
  { name: "Cataflam", price: 80, quantity: 0 },
  { name: "Brufen", price: 60, quantity: 20 },
  { name: "Voltaren", price: 95, quantity: 3 }
];
Your program must:

Print all medicine names alphabetically.
Print only medicines currently in stock.
Calculate total units in stock.
Calculate total inventory value.
Find the most expensive medicine.
Print medicines with fewer than 5 units.
Produce a readable summary.
Organize the calculations into functions.
Use Git to commit the finished work.
Pass condition */

const medicines = [
  { name: "Panadol", price: 50, quantity: 10 },
  { name: "Augmentin", price: 120, quantity: 5 },
  { name: "Cataflam", price: 80, quantity: 0 },
  { name: "Brufen", price: 60, quantity: 20 },
  { name: "Voltaren", price: 95, quantity: 3 }
];

let namesAlph = medicines.map(medicine => medicine.name).sort();
console.log(namesAlph);

let namesInStock = medicines.filter(medicine => medicine.quantity > 0).map(medicine => medicine.name).sort();
console.log(namesInStock);

let totalUnitInStock = medicines.reduce((total, medicine) => total + medicine.quantity,0);
console.log(totalUnitInStock);

let totalInventoryValue = medicines.reduce((total, medicine) => total + medicine.price * medicine.quantity, 0);
console.log(totalInventoryValue);

let mostExpMed = () => medicines.reduce((max, medicine) => medicine.price > max.price ? medicine : max);
console.log(mostExpMed());

