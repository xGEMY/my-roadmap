# Day 3 — Lab Exercises

## Lab — Level 1: Direct exercises

1. Create an array of five medicine names.
2. Print the first medicine.
3. Print the last medicine.
4. Print the number of medicines.
5. Add a new medicine.
6. Remove the last medicine.
7. Remove the first medicine.
8. Add a medicine to the beginning.
9. Check whether a specific medicine exists.
10. Loop over the array and print every medicine.

## Lab — Level 2: Processing data

11. Given an array of prices, calculate the total using a loop.
12. Find the largest number in an array.
13. Find the smallest number in an array.
14. Count how many numbers are greater than 100.
15. Count how many times a specific medicine appears.
16. Print only the medicines whose names match a given value.

### Important restriction

For these exercises, **use loops**, even when you already know a built-in method that could do the work.

The point is to learn iteration and problem solving.

## Lab — Level 3: Inventory report

Given:

```js
const medicines = [
  { name: "Panadol", price: 50, quantity: 10 },
  { name: "Augmentin", price: 120, quantity: 5 },
  { name: "Cataflam", price: 80, quantity: 0 },
  { name: "Brufen", price: 60, quantity: 20 }
];
```

For now, you do **not** need to understand advanced object techniques. Treat each object as a simple data record.

Using loops:

1. Print all medicine names.
2. Print medicines that are out of stock.
3. Calculate the total inventory value.
4. Find the medicine with the highest price.
5. Count how many medicines have stock below 5.

## Challenge

Write a program that receives an array of numbers and produces a small report containing:

```text
Count
Sum
Average
Minimum
Maximum
Number of even values
Number of odd values
```

Do it using loops and basic variables.

## End-of-day self-test

Without notes, explain:

- What is an array?
- What is an index?
- Why does the first element have index `0`?
- What does `length` represent?
- Difference between `push` and `pop`?
- Why do loops need a stopping condition?
- What happens when the stopping condition is wrong?
