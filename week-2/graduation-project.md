# Week 2 Graduation Project

## Final Week 2 Challenge — Pharmacy Sales Analyzer

Build a standalone JavaScript program using the concepts from **Week 1 + Week 2**.

No tutorial.
No copied solution.
No AI-generated code.

Start with:

```js
const sales = [
  { medicine: "Panadol", price: 50, quantity: 3, customer: "Ahmed" },
  { medicine: "Augmentin", price: 120, quantity: 2, customer: "Mona" },
  { medicine: "Panadol", price: 50, quantity: 5, customer: "Khaled" },
  { medicine: "Cataflam", price: 80, quantity: 1, customer: "Sara" },
  { medicine: "Brufen", price: 60, quantity: 7, customer: "Ali" }
];
```

Create functions that calculate:

```text
getTotalRevenue()
getTotalUnits()
getLargestSale()
getSalesAboveQuantity(limit)
getMedicineNames()
getFormattedSales()
```

Use the concepts you have learned:

```text
variables
operators
conditions
arrays
loops
functions
objects
number methods
string methods
array methods
arrow functions
scope
map
filter
reduce
forEach
```

### Requirements

1. Do not hard-code calculated results.
2. Use functions for reusable calculations.
3. Use `map`, `filter`, `reduce`, and `forEach` where appropriate.
4. Keep the functions reasonably small.
5. Use meaningful variable and function names.
6. Print a readable final report.
7. Commit the project to Git.
8. Push it to GitHub.

### Optional extension

Add a function that receives a medicine name and returns the total number of units sold for that medicine.

Example:

```text
Panadol → 8
```

Do not worry about a database or API. The data stays in memory.

---

# Week 2 Graduation Gate

Do **not** move to Week 3 just because all four days were completed.

You pass Week 2 only when you can demonstrate the following independently.

## Required abilities

- Manipulate numbers using common number methods.
- Clean and transform strings.
- Use `switch` when appropriate.
- Understand `??` at a basic practical level.
- Manipulate arrays beyond just adding/removing values.
- Control loops using `break` and `continue`.
- Write functions using rest parameters.
- Understand arrow functions.
- Explain basic variable scope.
- Explain what a higher-order function is.
- Use `map`, `filter`, `reduce`, and `forEach` correctly.
- Initialize and inspect a Git repository.
- Create meaningful commits.
- Push a repository to GitHub.

## Graduation test

Give yourself **90 minutes**.

No tutorial.
No copying.
No AI-generated solution.

### Problem

Build a **Pharmacy Stock Report** from:

```js
const medicines = [
  { name: "Panadol", price: 50, quantity: 10 },
  { name: "Augmentin", price: 120, quantity: 5 },
  { name: "Cataflam", price: 80, quantity: 0 },
  { name: "Brufen", price: 60, quantity: 20 },
  { name: "Voltaren", price: 95, quantity: 3 }
];
```

Your program must:

1. Print all medicine names alphabetically.
2. Print only medicines currently in stock.
3. Calculate total units in stock.
4. Calculate total inventory value.
5. Find the most expensive medicine.
6. Print medicines with fewer than 5 units.
7. Produce a readable summary.
8. Organize the calculations into functions.
9. Use Git to commit the finished work.

### Pass condition

You do not need perfect code.

You **must** be able to decide which JavaScript tools to use without being guided line-by-line.

For example, when you see:

> "Create an array containing only medicines that are in stock."

you should be able to recognize that this is a **filtering** problem.

When you see:

> "Calculate the total value of all stock."

you should be able to recognize that this is a **reduction/aggregation** problem.

That ability to translate requirements into operations is the real goal.

If you cannot solve it, identify exactly where you got stuck, review that concept, and try again.
