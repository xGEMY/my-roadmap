
let numbers = [12, 20, 30, 43, 56, 60, 74, 84, 95, 105, 106, 147, 168, 196, 204, 215];

let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

/*---------------*/

let names = ["Ahmed", "omar", "eslam", "ali", "mohamed", "sara", "nour", "youssef"];
let upperCase = names.map(name => name.toUpperCase());
console.log("Uppercase Names:", upperCase);

/*---------------*/ 

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

/*---------------*/

let numbersGreaterThan50 = numbers.filter(num => num > 50);
console.log("Numbers Greater Than 50:", numbersGreaterThan50); 

/*---------------*/

let sumNumbers = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of Numbers:", sumNumbers);

/*---------------*/ 

let multiNum = [10, 30, 33, 43]
let productNumbesrs = multiNum.reduce ((total, num) => total * num ,1);
console.log("totalNumbers :", productNumbesrs);

/*-----------*/
//Print every item using forEach.

let everyitem = numbers.forEach(number => console.log(number));

/*-------------------------*/


const medicines = [
{ name: "Panadol", price: 50, quantity: 10 },
{ name: "Augmentin", price: 120, quantity: 5 },
{ name: "Cataflam", price: 80, quantity: 0 },
{ name: "Brufen", price: 60, quantity: 20 }
];

let medName = medicines.map(medicines => (medicines.name));
console.log(medName);

/*-------------*/

let medStock = medicines.filter(medicine => (medicine.quantity > 0));
console.log("medicins in stock :",medStock);

/*-------------*/

let medPrice = medicines.map(medicines => (medicines.price));
console.log("medicins prices :",medPrice);

/*-------------*/

let totalValue = medicines.reduce((sum, medicine) => {
    return sum + (medicine.price * medicine.quantity);
}, 0);
console.log("Total medicins prices :",totalValue);

/*-------------*/

let totalUnite = medicines.reduce((sum, medicine) =>  sum + medicine.quantity, 0);
console.log("Total medicins quantity :",totalUnite);

/*-------------*/

let eachMed = medicines.forEach(medicine => {
    console.log(`Name: ${medicine.name} | Price: ${medicine.price} | Quantity: ${medicine.quantity}`);
});

/*-------------*/

let below10 = medicines
    .filter(medicine => medicine.quantity < 10)
    .map(medicine => medicine.name);

/*-------------*/

console.log("Medicines below 10:", below10);

/*-------------*/

let medNames = medicines.map(medicines => (medicines.name));
console.log("Medicine Names :", medNames);

/*-------------*/

let avaiMed = medicines
    .filter(medicine => medicine.quantity > 0)
    .map(medicine => medicine.name);
console.log("Available Medicines: ", avaiMed);

/*-------------*/

let totalUn = medicines.reduce((sum, medicin) => sum + medicin.quantity, 0);
console.log("total units: ", totalUn);

/*-------------*/

let totalVal = medicines.reduce((sum, medicine) => {
    return sum + (medicine.price * medicine.quantity);
}, 0);
console.log("Total inventory value: ",totalVal);

/*-------------*/

let lowstock= medicines
    .filter(medicine => medicine.quantity < 10)
    .map(medicine => medicine.name);

console.log("Low-stock medicines: ", lowstock);
