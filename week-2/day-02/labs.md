# Day 2 — Lab Exercises

## Lab — Level 1: Direct exercises

1. Use a ternary expression to print whether a person is an adult or minor.
2. Use `??` to provide a fallback when a value is `null` or `undefined`.
3. Use `switch` to convert a day number into a day name.
4. Sort an array of numbers.
5. Sort an array of names alphabetically.
6. Create a smaller array from part of another array using `slice`.
7. Join an array of words into a sentence.
8. Stop a loop when a target value is found.
9. Skip numbers that are not valid for a given condition using `continue`.

## Lab — Level 2: Combine concepts

10. Given an array of medicine names, produce an alphabetically sorted list and print it as one sentence.

11. Given an array of numbers, find the first value greater than 100 and stop processing after finding it.

12. Given an array of medicine quantities, skip zero quantities and print only available stock.

13. Given a user's optional configuration object, choose a default value only when the original value is `null` or `undefined`.

14. Given a numeric menu choice:

```text
1 → Add medicine
2 → Remove medicine
3 → Search medicine
4 → Exit
```

Use `switch` to print the selected action.

## Lab — Level 3: Inventory processing

Given:

```js
const quantities = [12, 0, 5, 3, 0, 18, 2, 9];
```

Create a program that:

1. Prints the quantities sorted from smallest to largest.
2. Skips all zero values.
3. Stops when it encounters a quantity greater than 15.
4. Produces a readable string from the processed values.

### Challenge

Given an array of medicine objects:

```js
const medicines = [
  { name: "Panadol", quantity: 10 },
  { name: "Augmentin", quantity: 0 },
  { name: "Cataflam", quantity: 5 },
  { name: "Brufen", quantity: 20 }
];
```

Print the medicine names in alphabetical order, but ignore medicines with zero quantity.

Do this using the tools you have learned so far. Do **not** use `map`, `filter`, or `reduce` yet.

## End-of-day self-test

Without notes, explain:

- When is a ternary expression appropriate?
- Difference between `||` and `??` at a basic level.
- When would `switch` be clearer than several `else if` branches?
- Difference between `slice` and modifying the original array.
- What does `break` do?
- What does `continue` do?
- Why can sorting numbers in JavaScript surprise beginners?
