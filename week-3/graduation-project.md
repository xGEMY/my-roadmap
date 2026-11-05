# Week 3 Graduation Project

## Final Week 3 Challenge — Type-Safe Pharmacy Stock Report

Build a standalone TypeScript program using the concepts from **Weeks 1, 2, and 3**.

No tutorial while implementing.
No copied solution.
No AI-generated code.

Create a file:

```text
week-03/src/pharmacy-stock-report.ts
```

Start with this data. You may add more records, but do not remove the variety of cases:

```ts
const medicines = [
  { id: 1, name: "Panadol", price: 50, quantity: 10, category: "Pain Relief" },
  { id: 2, name: "Augmentin", price: 120, quantity: 5, category: "Antibiotic" },
  { id: 3, name: "Cataflam", price: 80, quantity: 0, category: "Pain Relief" },
  { id: 4, name: "Brufen", price: 60, quantity: 20, category: "Pain Relief" },
  { id: 5, name: "Vitamin C", price: 35, quantity: 3, category: "Other" }
];
```

### Requirements

1. Define a `Medicine` interface with appropriate property types.
2. Define a `MedicineCategory` enum and use it in the medicine model. Update the initial data values accordingly.
3. Define a `StockStatus` literal union with `"in-stock"`, `"low-stock"`, and `"out-of-stock"`.
4. Define an `InventoryReport` interface for the summary your program produces.
5. Give all function parameters and return values explicit, appropriate types.
6. Implement these functions:

```text
getStockStatus(medicine)
getTotalUnits(medicines)
getTotalInventoryValue(medicines)
getAvailableMedicines(medicines)
getLowStockMedicines(medicines, threshold)
findMedicine(medicines, identifier)
createInventoryReport(medicines)
```

7. `findMedicine` must accept either a numeric ID or a medicine name. Use type narrowing to decide how to search.
8. The inventory report must contain total medicine types, total units, total inventory value, and the names of out-of-stock medicines.
9. Print a readable report without hard-coding calculated values.
10. Compile and run the generated JavaScript.
11. Commit the finished work and push it to GitHub.

### Quality requirements

- Do not use `any`.
- Do not use type assertions to silence compiler errors.
- Do not disable strict compiler checks.
- Avoid repeating the same object shape in multiple places; use interfaces and type aliases.
- Keep functions reasonably small and use meaningful names.
- Keep the data in memory. No database or API is required this week.

---

# Week 3 Graduation Gate

Do **not** move to Week 4 just because all four days were completed.

You pass Week 3 only when you can demonstrate the following independently.

## Required abilities

- Explain the relationship between TypeScript and JavaScript.
- Compile a TypeScript file into JavaScript.
- Explain the purpose of `tsconfig.json` and strict mode.
- Distinguish explicit type annotations from type inference.
- Type primitive values and arrays.
- Type function parameters and return values.
- Use optional, default, and rest parameters.
- Create and reuse type aliases.
- Use literal types and tuples appropriately.
- Explain `void` and `never` at a basic level.
- Understand enums and when a literal union may be simpler.
- Describe object shapes with interfaces.
- Extend an interface.
- Use union and intersection types.
- Narrow a union before accessing type-specific properties or methods.
- Explain why type assertions do not perform runtime validation.
- Fix compiler errors without blindly adding `any`.
- Commit and push TypeScript work using Git.

## Graduation test

Give yourself **90 minutes**.

No tutorial.
No copying.
No AI-generated solution.

### Problem — Pharmacy Inventory Summary

Create a new TypeScript program that accepts an in-memory list of medicines. Each medicine must have an ID, name, price, quantity, and category.

Your program must:

1. Define the medicine shape with an interface.
2. Define the allowed medicine categories with an enum or a carefully designed literal union.
3. Define a `StockStatus` literal union.
4. Write a function that receives a medicine and returns its stock status.
5. Write a function that finds a medicine using an ID or a name (a union input).
6. Calculate the total number of units and total inventory value.
7. Return a typed summary object.
8. Print a readable report.
9. Compile successfully with strict mode enabled.

### Pass condition

You do not need perfect code.

You **must** be able to describe the expected shape of your data and function inputs/outputs before writing the implementation.

For example, when you see:

> "This function accepts either a medicine ID or a medicine name."

you should recognize that the parameter needs a **union type**.

When you see:

> "Every medicine must have an ID, name, price, and quantity."

you should recognize that an **interface or object type** can describe that contract.

When you see:

> "The function must return one of three stock states."

you should recognize that a **literal union** is a good fit.

That ability to translate requirements into types is the real goal.
