/*Use a ternary expression to print whether a person is an adult or minor.
Use ?? to provide a fallback when a value is null or undefined.
Use switch to convert a day number into a day name.
Sort an array of numbers.
Sort an array of names alphabetically.
Create a smaller array from part of another array using slice.
Join an array of words into a sentence.
Stop a loop when a target value is found.
Skip numbers that are not valid for a given condition using continue.*/
let age = undefined;

console.log(age >= 18 ? "adult" : "minor");
/*-----------------*/
console.log(age ?? "Age is not defined");
/*-----------------*/
let day = 1;
switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break; 
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break; 
    default:
    console.log("Invalid day number");
}
/*-----------------*/
let numbers = [45, 22, 79, 81, 59, 212, 654, 63];
numbers.sort((a, b) => a - b);
console.log(numbers);
/*-----------------*/
let names = ["ahmed", "othman", "mohamed", "sara", "hassan"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
/*-----------------*/
let medicines = ["paracetamol", "ibuprofen", "amoxicillin", "aspirin", "cetirizine"];
console.log(medicines);
let medSlice = medicines.slice(1, 4);
console.log(medSlice);
/*-----------------*/
let words = ["I", "hate", "the", "long", "shift", "at", "work"];
let sentence = words.join(" ");
console.log(sentence);
/*-----------------*/
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let targetMonth = "october";
let found = false;

for (let i = 0; i < months.length; i++) {
  if (months[i].toLowerCase() === targetMonth.toLowerCase()) {
    console.log(`Found ${targetMonth} at index ${i}`);
    break;
  }
  if (found === false)
  console.log("Month not found");
} 
/*-----------------*/
let prices = [10, 20, 22, 55, 446, 30, 40, 50, 60, 70, 80, 90, -150, 100];

for (let j = 0; j < prices.length; j++) {
  if (prices[j] > 50) {
    console.log(`Found price greater than 50: ${prices[j]}`);
  }
}
/*-----------------*/
/*Given an array of medicine names, produce an alphabetically sorted list and print it as one sentence.

Given an array of numbers, find the first value greater than 100 and stop processing after finding it.

Given an array of medicine quantities, skip zero quantities and print only available stock.

Given a user's optional configuration object, choose a default value only when the original value is null or undefined.

Given a numeric menu choice:   
1 → Add medicine
2 → Remove medicine
3 → Search medicine
4 → Exit
Use switch to print the selected action.

  */

let medicineNames = ["Paracetamol", "Ibuprofen", "Amoxicillin", "Aspirin", "Cetirizine", "Metformin", "Omeprazole", "Simvastatin", "Losartan", "Albuterol"];
medicineNames.sort((a, b) => a.localeCompare (b));
console.log(medicineNames.join(" "));
/*-----------------*/
let numbersArray = [10, 20, 22, 55, 446, 30, 40, 50, 60, 70, 80, 90, 150, 100];
for (let k = 0; k < numbersArray.length; k++) {
  if (numbersArray[k] > 100) {
    console.log(`Found number greater than 100: ${numbersArray[k]}`);
    break;
  }
}
/*-----------------*/
let medicineQuantities = [10, 0, 5, 0, 20, 15, 0, 30, 55, 0];
for(let l = 0; l < medicineQuantities.length; l++) {
  if (medicineQuantities[l] === 0) {
    continue;
  }
  console.log(`Available stock: ${medicineQuantities[l]}`);
}
/*-----------------*/
let userConfig = { theme: null };
let selectedTheme = (userConfig.theme ?? "default");
console.log(`Selected theme: ${selectedTheme}`);
/*-----------------*/
let menuChoice = 2;
switch (menuChoice) {
  case 1:
    console.log("Add medicine");
    break;
  case 2:
    console.log("Remove medicine");
    break;
  case 3:
    console.log("Search medicine");
    break;
  case 4:
    console.log("Exit");
    break;
  default:
    console.log("Invalid menu choice.");
}
/*-----------------*/
/*Inventory processing
Given:

const quantities = [12, 0, 5, 3, 0, 18, 2, 9];
Create a program that:

Prints the quantities sorted from smallest to largest.
Skips all zero values.
Stops when it encounters a quantity greater than 15.
Produces a readable string from the processed values.

-------

Challenge
Given an array of medicine objects:

const medicines = [
  { name: "Panadol", quantity: 10 },
  { name: "Augmentin", quantity: 0 },
  { name: "Cataflam", quantity: 5 },
  { name: "Brufen", quantity: 20 }
];
Print the medicine names in alphabetical order, but ignore medicines with zero quantity.*/

const quantities = [12, 0, 5, 3, 0, 18, 2, 9];

quantities.sort((a, b) => a - b);

for(let q = 0; q < quantities.length; q++) {
  if (quantities[q] === 0) {
    continue;
  }
  if (quantities[q] > 15) {
    break;
  }
  console.log(`Processed quantity: ${quantities[q]}`);
}
/*-----------------*/
const medicinesArray = [
  { name: "Panadol", quantity: 10 },
  { name: "Augmentin", quantity: 0 },
  { name: "warfrin", quantity: 100 },
  { name: "Cataflam", quantity: 5 },
  { name: "Brufen", quantity: 20 }
];

medicinesArray.sort((a, b) => a.name.localeCompare(b.name));
for (let m = 0; m < medicinesArray.length; m++) {
  if (medicinesArray[m].quantity === 0) {
    continue;
  }
  console.log(`Processed medicine: ${medicinesArray[m].name}`);
}
/*-----------------*/
