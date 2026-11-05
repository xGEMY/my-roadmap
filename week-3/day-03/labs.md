# Day 3 — Lab Exercises

## Lab — Level 1: Direct exercises

1. Create a type alias named `MedicineId` for a numeric identifier.
2. Create a type alias named `MedicineName` for a string.
3. Create a type alias named `StockStatus` that accepts only `"in-stock"`, `"low-stock"`, or `"out-of-stock"`.
4. Create a variable that uses `StockStatus`. Try assigning an unsupported value and inspect the compiler error.
5. Create a tuple containing a medicine name and its quantity. Give each position the correct type.
6. Write a function that prints a message and returns no value. Give it a `void` return type.
7. Write a function that always throws an error and understand why its return type can be `never`.

## Lab — Level 2: Model pharmacy data

8. Create a type alias named `Medicine` with these properties:

```text
id: number
name: string
price: number
quantity: number
```

9. Create an enum named `MedicineCategory` with at least three categories, such as pain relief, antibiotic, and other.

10. Create a type alias for a medicine search result that can be either a medicine ID (`number`) or a medicine name (`string`).

11. Create a function that receives a `StockStatus` and returns a human-readable message.

12. Create a tuple representing one stock adjustment:

```text
medicine name
quantity change
reason
```

Use the tuple in at least two examples and access each position correctly.

## Lab — Level 3: Combine reusable types

### Pharmacy stock movements

Create a program that models stock adjustments.

Each movement should contain:

```text
medicineId
medicineName
quantityChange
reason
```

Requirements:

1. Use a type alias for the movement structure.
2. Use a literal union for the allowed reasons, such as `"purchase"`, `"sale"`, and `"correction"`.
3. Use an enum for medicine categories.
4. Write a typed function that calculates the new quantity after a movement.
5. Write a typed function that returns a readable description of the movement.
6. Reject a movement that would make the resulting stock quantity negative.

Do not introduce classes yet. Use functions and types only.

## End-of-day self-test

Without notes, explain:

- What problem does a type alias solve?
- What is a literal type?
- Difference between an array and a tuple?
- Difference between `void` and `never`?
- What is an enum?
- When might a string-literal union be simpler than an enum?
- Why is reusing a named type better than repeating a complicated type everywhere?
