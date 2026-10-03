# Day 4 — Lab Exercises

## Lab — Level 1: Direct exercises

Use arrays of simple values first.

1. Double every number using `map`.
2. Convert an array of names to uppercase using `map`.
3. Keep only even numbers using `filter`.
4. Keep only numbers greater than 50.
5. Calculate the sum of numbers using `reduce`.
6. Calculate the product of numbers using `reduce`.
7. Print every item using `forEach`.

## Lab — Level 2: Objects and real data

Use:

```js
const medicines = [
  { name: "Panadol", price: 50, quantity: 10 },
  { name: "Augmentin", price: 120, quantity: 5 },
  { name: "Cataflam", price: 80, quantity: 0 },
  { name: "Brufen", price: 60, quantity: 20 }
];
```

8. Create an array containing only medicine names.
9. Create an array containing only medicines currently in stock.
10. Create an array containing medicine prices.
11. Calculate the total inventory value.
12. Calculate the total number of units in stock.
13. Print each medicine in a readable format.
14. Create an array containing the names of medicines whose quantity is below 10.

## Lab — Level 3: Combine transformations

### Pharmacy inventory report

Build a program that produces:

```text
Medicine names:
Panadol, Augmentin, Cataflam, Brufen

Available medicines:
Panadol, Augmentin, Brufen

Total units:
35

Total inventory value:
...

Low-stock medicines:
Panadol, Cataflam
```

Do not hard-code the report values.

Calculate everything from the data.

### Challenge

Given:

```js
const sales = [
  { medicine: "Panadol", price: 50, quantity: 3 },
  { medicine: "Augmentin", price: 120, quantity: 2 },
  { medicine: "Panadol", price: 50, quantity: 5 },
  { medicine: "Cataflam", price: 80, quantity: 1 }
];
```

Calculate:

1. The total revenue.
2. The total number of sold units.
3. All unique medicine names are **not required yet**; do not introduce `Set`.
4. The names of sales with more than 2 units.
5. A formatted line for every sale.

Use `map`, `filter`, `reduce`, and `forEach` where each one makes sense.

## Lab — Level 4: GitHub

Take your Week 2 work and publish it.

1. Create a new GitHub repository for your learning repository.
2. Connect your local repository to the GitHub remote.
3. Push your commits.
4. Make another change locally.
5. Commit it.
6. Push again.
7. Verify the change on GitHub.
8. If appropriate, clone the repository into a second directory and inspect the files.

You should now understand the basic flow:

```text
Work locally
   ↓
git add
   ↓
git commit
   ↓
git push
   ↓
GitHub
```

Do not worry about pull requests, rebase, stash, tags, or advanced branching yet.

## End-of-day self-test

Without notes, explain:

- What is a higher-order function?
- Difference between `map` and `filter`.
- Difference between `map` and `forEach`.
- What problem does `reduce` solve?
- Give one real-world example for each of the four methods.
- What is a remote repository?
- What does `git push` do?
- Why do we commit locally before pushing?
