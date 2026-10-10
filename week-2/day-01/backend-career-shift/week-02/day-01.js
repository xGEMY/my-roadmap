/*
Write each solution yourself.

Round 12.786 to two decimal places.
Convert the string "150" into a number.
Convert "19.75" into a decimal number.
Check whether a given value is an integer.
Generate a random integer from 1 to 10.
Convert a medicine name to uppercase.
Remove extra spaces from a patient's name.
Check whether a string contains the word "expired".
Extract the first 5 characters of a string.
Split a full name into separate words.
*/


let number = 12.786;
console.log(Number(number.toFixed(2))); 

let stry = "150";
let num = Number(stry);
console.log(num);

let str = "19.75";
let decimalNum = parseFloat(str);
console.log(decimalNum);

console.log(Number.isInteger(str));
console.log(Number.isInteger(num));

const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); 
//let randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);

let medicineName = "aspirin";
console.log(medicineName.toUpperCase());

let patientName = "   saddam hussen   ";
console.log(patientName.trim());    

let Check = "This medicine is expired.";    
console.log(Check.toLowerCase().includes("expired"));

let str1 = "Mansoura University";
console.log(str1.substring(4, 8));  

let fullName = "michael jordan";
console.log(fullName.split(" "));

/*-------------------------------------------------------*/

/* A medicine price is received as a string:
"125.50"
Convert it to a number and calculate the price for 3 units.
*/

let medprice = "125.50";
let priceNumber = parseFloat(medprice);
console.log(priceNumber * 3);

/*-------------------------------------------------------*/

/*  Given a patient's name with accidental spaces and inconsistent capitalization, normalize it into a cleaner form.
Example input:

"   ahmed mohamed   " */
let patientName2 = "   ahmed mohamed   ";
console.log(patientName2.trim().toLowerCase());

/*-------------------------------------------------------*/

/*Given a medicine code:
"MED-2026-PAN-001"
Extract the meaningful parts using string operations.*/

let medicineCode = "MED-2026-PAN-001";
let parts = medicineCode.split("-");
console.log(parts);

/*-------------------------------------------------------*/

/*Given a sentence, count how many words it contains.*/

let sentence = " hellow everyone, this is a test for what i am trying to do     ";
let sentencewords = sentence.trim().split(" ");
console.log(sentencewords);
console.log(sentencewords.length);

/*-------------------------------------------------------*/

/*Given a product price and discount percentage, calculate the final price and format it to two decimal places.*/

let medicineName2 = "Paracetamol";
let medicinePrice2 = 250.75;
let discountPercentage = 10;
let finalPrice = medicinePrice2 - (medicinePrice2 * discountPercentage / 100);

console.log(Number(parseFloat(finalPrice).toFixed(2)));

/*-------------------------------------------------------*/

/*Normalize medicine data
You receive these values:

name = "   panadol extra "
price = "54.999"
quantity = "10"
Produce clean values:

name      → "Panadol Extra"
price     → 55.00
quantity  → 10
Then print a readable result.
*/

let medicineName3 = "   panadol extra ";
let medicinePrice3 = "54.999";
let medicineQuantity3 = "10";

/* panadol extra --> Panadol Extra */
let cleanName3 = medicineName3.trim();
console.log(cleanName3.charAt(0).toUpperCase() + cleanName3.slice(1, 8).toLowerCase() + cleanName3.charAt(8).toUpperCase() + cleanName3.slice(9));

let cleanPrice3 = Number(parseFloat(medicinePrice3).toFixed(2));
console.log(cleanPrice3);

let cleanQuantity3 = parseInt(medicineQuantity3);
console.log(cleanQuantity3);

function printMedicineData(name, price, quantity) {
  console.log(`Medicine Name: ${name}`);
  console.log(`Price: ${price}`);
  console.log(`Quantity: ${quantity}`);
}
printMedicineData(cleanName3, cleanPrice3, cleanQuantity3);


