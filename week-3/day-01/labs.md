# Day 1 — Lab Exercises

## Lab — Level 1: Direct exercises

Write each solution yourself.

1. Declare a variable named `medicineName` and explicitly type it as a string.
2. Declare `unitPrice` as a number and `isAvailable` as a boolean.
3. Create a variable for a patient's age and another for the patient's name.
4. Create a variable that can contain either a string or `null`.
5. Assign a string to a variable declared as a number, compile the file, and read the compiler error. Then correct the mistake.
6. Create one variable with an explicit type and another whose type is inferred. Explain the difference.
7. Print a medicine's name, price, and availability in a readable sentence.

## Lab — Level 2: Apply the concepts

8. Create a typed set of values for a pharmacy receipt:

```text
customerName
medicineName
unitPrice
quantity
discountPercentage
```

Calculate the subtotal, discount amount, and final total. Give every variable an appropriate type.

9. Create a value for a medicine's expiry status using a boolean. Print a different message depending on the value.

10. Create a function-independent calculation for the total price of 4 medicine packs. Make sure the compiler catches an attempt to use a string as a number.

11. Create a variable for a patient's middle name that may be absent. Represent the possibility accurately rather than storing the text `"undefined"`.

## Lab — Level 3: Compiler challenge

### Fix the pharmacy receipt types

Start with a small receipt program of your own. Give its variables explicit types, then deliberately introduce these mistakes one at a time:

- Assign text to a numeric variable.
- Assign a number to a boolean variable.
- Try to call a string method on a numeric value.
- Use a variable before giving it a valid value.

Compile after each change. Record the compiler message in your notes, then fix the underlying problem.

Do not use `any` or a type assertion to hide the errors.

## End-of-day self-test

Without looking at your notes, explain:

- What problem does TypeScript solve?
- Does TypeScript replace JavaScript at runtime?
- What does the TypeScript compiler produce?
- What is the difference between a type annotation and type inference?
- What does `strict` mode help the compiler check?
- Why should you avoid using `any` everywhere?
- Does a TypeScript type annotation validate external input at runtime?
