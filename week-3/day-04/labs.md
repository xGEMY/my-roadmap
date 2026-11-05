# Day 4 — Lab Exercises

## Lab — Level 1: Direct exercises

1. Create an interface named `Medicine` with `id`, `name`, `price`, and `quantity` properties.
2. Create an object that satisfies the `Medicine` interface.
3. Add an optional `manufacturer` property to the interface and create two valid medicine objects, one with the property and one without it.
4. Create an interface named `Supplier` with a name and phone number.
5. Create an interface method signature for a function that returns a medicine's total stock value.
6. Create an interface named `DetailedMedicine` that extends `Medicine` with a category property.
7. Create an intersection type that combines a medicine with audit information such as `createdAt` and `updatedAt`.

## Lab — Level 2: Unions and type narrowing

8. Create a variable that can contain either a medicine ID (`number`) or a medicine name (`string`).

9. Write a function that receives that union and handles each possible type using `typeof` before performing the relevant operation.

10. Create this result model using a discriminated union:

```text
Success result: { success: true, data: Medicine }
Failure result: { success: false, error: string }
```

Write a function that receives the result and safely prints the medicine name or the error message. Check `success` before accessing the corresponding property.

11. Create a function that receives a value of type `string | number | boolean` and returns a readable description. Narrow the type before using type-specific operations.

## Lab — Level 3: Design a typed pharmacy catalog

Create a small in-memory pharmacy catalog. Do not use a database, classes, or a backend framework.

Requirements:

1. Define a `Medicine` interface.
2. Define a `Supplier` interface.
3. Define a `StockStatus` literal union.
4. Define a `MedicineCategory` enum.
5. Define an interface that extends `Medicine` with supplier information.
6. Write typed functions to:
   - find a medicine by numeric ID or name
   - calculate the total stock value
   - determine whether a medicine is in stock, low on stock, or out of stock
   - format a medicine summary
7. Use union narrowing where the input can have more than one type.
8. Use `map`, `filter`, and `reduce` where appropriate.
9. Compile the project and fix all TypeScript errors without using `any` to bypass them.

## End-of-day self-test

Without notes, explain:

- How do you describe an object's shape?
- What is an interface?
- What is the purpose of an optional property?
- What does `extends` mean when used with interfaces?
- Difference between a union and an intersection type?
- What is type narrowing?
- What does a type assertion do, and what does it **not** do?
- How are `type` aliases and interfaces different in their common use cases?
