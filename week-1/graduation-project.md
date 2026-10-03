# Week 1 Graduation Project

## Final Week 1 Challenge — Pharmacy Inventory Console Program

Build a small JavaScript program using **only** what you learned this week.

Your data starts in memory:

```js
const medicines = [
  { name: "Panadol", price: 50, quantity: 10 },
  { name: "Augmentin", price: 120, quantity: 5 },
  { name: "Cataflam", price: 80, quantity: 0 }
];
```

Create functions for:

```text
listMedicines()
findMedicine(name)
calculateInventoryValue()
getOutOfStockMedicines()
getMostExpensiveMedicine()
```

Then call the functions and print a readable report.

### Optional extension

Add:

```text
addMedicine(medicine)
removeMedicine(name)
updateMedicineQuantity(name, quantity)
```

Do **not** worry about user input, files, databases, or APIs yet.

The purpose is to combine:

```text
variables
+ operators
+ conditions
+ arrays
+ loops
+ functions
+ objects
```

const medicines = [
    { name: "Panadol", price: 50, quantity: 10 },
    { name: "Augmentin", price: 120, quantity: 5 },
    { name: "Cataflam", price: 80, quantity: 0 }
];

/*--------------------------- */

function listMedicines() {
    console.log("List of Medicines:");
    medicines.forEach(medicine => {
        console.log(`Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    });
}

listMedicines();

/*--------------------------- */

function findMedicine(name) {
    const medicine = medicines.find(medicine => medicine.name.toLowerCase() === name.toLowerCase());
    if (medicine) {
        console.log(`Found Medicine: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    } else {
        console.log(`Medicine with name "${name}" not found.`);
    }
}

findMedicine("Panadol");
findMedicine("Aspirin");

/* -----------name.toLowerCase() = علشان يلاقيه بسهولة ودا طبعا بحثت عنه علشان مكنش بيطلع بسهولة في البحث------------------- */

function calculateInventoryValue() {
    const totalValue = medicines.reduce((acc, medicine) => acc + (medicine.price * medicine.quantity), 0);
    console.log(`Total Inventory Value: ${totalValue}`);
}

calculateInventoryValue();

/*--------------------------- */

function getOutOfStockMedicines() {
    const outOfStock = medicines.filter(medicine => medicine.quantity === 0);  
    console.log("Out of Stock Medicines:");
    if (outOfStock.length > 0) {
        outOfStock.forEach(medicine => {
            console.log(`Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
        });
    } else {
        console.log("No medicines are out of stock.");
    }
}

getOutOfStockMedicines();

/*--------------------------- */

function getMostExpensiveMedicine() {
    const mostExpensive = medicines.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    console.log(`Most Expensive Medicine: Name: ${mostExpensive.name}, Price: ${mostExpensive.price}, Quantity: ${mostExpensive.quantity}`);
}

getMostExpensiveMedicine(); 

/*--------------------------- */

function addMedicine(medicine) {
    medicines.push(medicine);
    console.log(`Medicine added: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    if (medicine.quantity === 0) {
        console.log(`Note: The medicine "${medicine.name}" is currently out of stock.`);
    }
} 

addMedicine({ name: "avil", price: 30, quantity: 20 });

listMedicines();

/*--------------------------- */

function removeMedicine(name) {
    const medicine = medicines.find(med => med.name.toLowerCase() === name.toLowerCase());
    if (medicine) {
        medicines.splice(medicines.indexOf(medicine), 1);
        console.log(`Medicine removed: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    } else {
        console.log(`Medicine with name "${name}" not found.`);
    }
}

removeMedicine("Augmentin");

listMedicines();

/*--------------------------- */

function updateMedicineQuantity(name, quantity) {
    const medicine = medicines.find(med => med.name.toLowerCase() === name.toLowerCase()); 
    if (medicine) {
        medicine.quantity = quantity;
        console.log(`Medicine quantity updated: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    } else {
        console.log(`Medicine with name "${name}" not found.`);
    }
}
updateMedicineQuantity("Panadol", 15);

/*--------------------------- */
---

# Week 1 Graduation Gate

Do **not** move to Week 2 just because all four days were completed.

You pass Week 1 only when you can do the following independently.

## Required abilities

- Run a JavaScript file with Node.js.
- Declare and update variables appropriately.
- Identify the common primitive types used this week.
- Use arithmetic and comparison operators.
- Write `if / else if / else` logic.
- Create and manipulate arrays.
- Iterate through arrays with a loop.
- Write functions with parameters and return values.
- Create and read simple objects.
- Combine all of the above to solve a new problem.

## Graduation test

Give yourself **60–90 minutes**.

No tutorial.
No copying.
No AI-generated code.
No searching for a complete solution.

### Problem

Create a small **pharmacy sales report**.

You are given:

```js
const sales = [
  { medicine: "Panadol", price: 50, quantity: 3 },
  { medicine: "Augmentin", price: 120, quantity: 2 },
  { medicine: "Panadol", price: 50, quantity: 5 },
  { medicine: "Cataflam", price: 80, quantity: 1 }
];
```

Your program must:

1. Calculate total revenue.
2. Print the total number of sold units.
3. Find the most expensive sale.
4. Count how many sales contain more than 2 units.
5. Print a readable summary.
6. Organize repeated calculations into functions.

### Pass condition

You are not expected to produce professional code yet.

You **must**, however, be able to solve the problem using the concepts from Week 1 without following a tutorial line by line.

If you cannot solve it, identify exactly where you got stuck, review that concept, and try again.
