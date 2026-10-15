/*Write a function that accepts any number of numbers and returns their sum using ""rest parameters""".
Write a function that accepts any number of numbers and returns the largest value.
Convert one normal function into an arrow function.
Write an anonymous function and use it in a variable.
Write two functions that use the same variable name locally. Observe that they do not interfere with each other.
Create one global variable and one local variable. Observe where each one can be accessed.*/

function number(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(number(5, 10, 15, 20));

/*----------------------------------*/

function largest(...numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(largest(5, 10, 15, 20, 150, -154, 250, -300));

/*----------------------------------*/

let quantity = (...quantity) => {
    let totalQuantity = 0;
    for (let i = 0; i < quantity.length; i++) {
        totalQuantity += quantity[i];
    } 
return totalQuantity;
};

console.log(quantity(5, 10, 15, 20, 100, 240, 500, 1000));

/*----------------------------------*/

let anonymous = function() {
    console.log("peace be upon you.");
}
anonymous();

/*----------------------------------*/

function firstFunction() {
    let localVariable = "hello, have a great day!";
    console.log(localVariable);
} 

function secondFunction() {
    let localVariable = "hello, have a nice day!";
    console.log(localVariable);
}   

firstFunction();
secondFunction();

/*----------------------------------*/

let globalVariable = "Great!";

function globalVariableFunction() {
    let localVariable = "Have a good day!";
    console.log(globalVariable); 
    console.log(localVariable);
}

globalVariableFunction();

/*----------------------------------*/  

/*Take one of your Week 1 solutions and split it into smaller functions.
For example, instead of one large block:

read data
calculate subtotal
calculate discount
format result
print result                  */

let medicines = [
    { name: "Panadol", price: 50, quantity: 10 },
    { name: "Augmentin", price: 120, quantity: 5 },
    { name: "Cataflam", price: 80, quantity: 0 }
];

function calculate(medicines) {
    let subtotal = 0;
    for (let i = 0; i < medicines.length; i++) {
        subtotal += medicines[i].price * medicines[i].quantity;
    }
    return subtotal;
}
console.log("Subtotal: $" + calculate(medicines));


function calculateDiscount(subtotal) {
    let discount = 0;
    if (subtotal > 1000) {
        discount = subtotal * 0.1; // 10% discount
    }
    return discount;
}   
console.log("Discount: $" + calculateDiscount(calculate(medicines)));

function formatResult(subtotal, discount) {
    let total = subtotal - discount;
    return `Subtotal: $${subtotal.toFixed(2)}, Discount: $${discount.toFixed(2)}, Total: $${total.toFixed(2)}`;
}

console.log(formatResult(calculate(medicines), calculateDiscount(calculate(medicines))));

/* Write a function that accepts an array and any number of additional values, then determine how those values should be combined.

Create an arrow function that calculates the final price of a medicine purchase.

Create a function that returns another function. Do not worry about advanced closures yet; just understand the relationship between the outer and inner functions.
*/

function anyArray(arr, ...values) {
    //let combined = arr.concat(values);
    //return combined;
    return [...arr, ...values];
}
console.log(anyArray([1, 2, 3], 4, 5, 6));

/*----------------------------------*/

let finalPrice = (price, quantity, discount) => {
    let subtotal = price * quantity;
    let total = subtotal - discount;
    return total;
}
console.log(finalPrice(50, 10, 20));

/*----------------------------------*/

let totalPriceFunction = (price, quantity, discount) => {
    return (price * quantity - discount);
}
console.log(totalPriceFunction(50, 10, 20));

/*----------------------------------*/

function outerFunction() {
  function innerFunction() {
    console.log("Game Over!");
  }
  return innerFunction;
}
let result = outerFunction();
result();

/*----------------------------------*/
