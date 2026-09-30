# Week 1 Cheatsheet — JavaScript Foundations

Syntax reminders only. Try it yourself first.

---

## Day 1 — JavaScript Basics

```js
// run
node day-01.js

console.log("hello");           // print
const name = "Ahmed";           // can't reassign
let qty = 3;                    // can reassign

// types: string  number  boolean  null  undefined
typeof 5        // "number"
typeof "a"      // "string"

// template literal
console.log(`Total: ${price * qty} EGP`);
```

---

## Day 2 — Operators & Conditions

```js
+  -  *  /  %              // arithmetic (% = remainder)
x += 1  x -= 1  x *= 2   // assignment

===  !==  >  <  >=  <=   // comparison
&&  ||  !                 // logical

if (cond) {
  ...
} else if (cond) {
  ...
} else {
  ...
}
```

`% 2 === 0` → even · `x > 0 && y === true` → both must hold

---

## Day 3 — Arrays & Loops

```js
const meds = ["Panadol", "Brufen"];
meds[0]              // first (index starts at 0)
meds[meds.length - 1] // last
meds.length          // count

meds.push("X");      // add to end
meds.pop();          // remove from end
meds.unshift("X");   // add to start
meds.shift();        // remove from start
meds.includes("Panadol"); // exists?

for (let i = 0; i < meds.length; i++) {
  console.log(meds[i]);
}

// objects in array
meds[i].name         // read property
meds[i].quantity     // read property
```

---

## Day 4 — Functions & Objects

```js
function add(a, b = 0) {   // a, b = parameters
  return a + b;            // return value
}
add(2, 3);                 // 2, 3 = arguments → 5

// object
const medicine = {
  name: "Panadol",
  price: 50,
  quantity: 10,
  isAvailable: true
};
medicine.price           // read
medicine.quantity = 20;  // update

// nested
const customer = { name: "Ahmed", address: { city: "Cairo" } };
customer.address.city;
```

Return when you need the value; print when you just want to show it.
