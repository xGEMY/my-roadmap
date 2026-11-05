# Day 2 — Lab Exercises

## Lab — Level 1: Direct exercises

1. Create an array of medicine names and type it as an array of strings.
2. Create an array of medicine prices and type it as an array of numbers.
3. Create a two-dimensional array representing shelves and their medicine quantities.
4. Write `calculateTotal(price, quantity)` with numeric parameters and a numeric return type.
5. Write `isAvailable(quantity)` with a numeric parameter and a boolean return type.
6. Write `formatMedicineName(name)` with a string parameter and a string return type.
7. Write an arrow function that receives two numbers and returns their sum. Add parameter and return types.

## Lab — Level 2: Function parameters

8. Write `getMedicineLabel(name, strength?)`. The strength parameter is optional. Return a string in both cases.

9. Write `calculateDiscount(price, percentage = 0)`. Give both parameters appropriate types and explicitly type the return value.

10. Write `calculateAverage(...scores)`. It must accept any number of numeric arguments and return their average. Decide what the function should do when no scores are provided.

11. Write `getMedicineNames(medicines)`. It receives an array of medicine objects with `name` properties and returns an array of strings. For this exercise, describe the object shape directly in the parameter type.

12. Write a function that receives a two-dimensional array of daily sales and returns the total number of sales entries.

## Lab — Level 3: Combine typed arrays and functions

### Pharmacy daily sales calculator

Use this data:

```ts
const sales = [
  { medicine: "Panadol", price: 50, quantity: 3 },
  { medicine: "Augmentin", price: 120, quantity: 2 },
  { medicine: "Panadol", price: 50, quantity: 5 },
  { medicine: "Cataflam", price: 80, quantity: 1 }
];
```

Write typed functions that calculate:

```text
getTotalRevenue(sales)
getTotalUnits(sales)
getSaleValue(price, quantity)
getSalesAboveQuantity(sales, limit)
getMedicineNames(sales)
```

Requirements:

- Give every function's parameters appropriate types.
- Give every function an explicit return type.
- Use array methods from Week 2 where they make sense.
- Do not use `any`.
- Do not hard-code calculated results.

## End-of-day self-test

Without notes, explain:

- How do you type an array of strings?
- How do you type a function's parameters and return value?
- What is an optional parameter?
- Difference between an optional parameter and a default parameter?
- What does a rest parameter receive?
- How do you type an arrow function?
- Why is it useful to make a function's return type explicit?
