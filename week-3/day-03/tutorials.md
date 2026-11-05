# Day 3 — Type Aliases And More TypeScript Types

## Objective

Learn how to create reusable names for types and represent data that has more specific shapes or allowed values.

You should finish today able to define type aliases, restrict values with literal types, model fixed-position data with tuples, understand `void` and `never`, and use enums when they make sense.

## Video slot — 34m 43s total

Watch these lessons from **Elzero Web School — Learn TypeScript In Arabic 2022**:

1. **#12 — Data Types: Type Alias** — 02:33  
   [YouTube](https://www.youtube.com/watch?v=TWTt63RJ3ic)
2. **#13 — Data Types: Type Alias Advanced** — 04:44  
   [YouTube](https://www.youtube.com/watch?v=J1WsNERYqYA)
3. **#14 — Data Types: Literal Types** — 04:13  
   [YouTube](https://www.youtube.com/watch?v=BmmTQZsKXyw)
4. **#15 — Data Types: Tuple** — 05:44  
   [YouTube](https://www.youtube.com/watch?v=hwTOswoq3BE)
5. **#16 — Data Types: Void And Never** — 07:37  
   [YouTube](https://www.youtube.com/watch?v=tPQCnP2IYn8)
6. **#17 — Data Types: Enums Part 1** — 05:02  
   [YouTube](https://www.youtube.com/watch?v=Lb8-2rI8nco)
7. **#18 — Data Types: Enums Part 2** — 04:50  
   [YouTube](https://www.youtube.com/watch?v=gMNoF-BVWpA)

### Concepts to understand

- Type aliases with `type`
- Reusing a type in multiple variables and function signatures
- Literal types
- Tuples and fixed element positions
- `void` as a function return type when there is no useful returned value
- `never` for code paths that cannot complete normally
- Enums
- Choosing between a string-literal union and an enum

Important practical guidance:

- Use a type alias when a name makes a complex or repeated type easier to understand.
- Use literal unions when a value must be one of a small, known set of strings.
- Understand enums, but do not assume every group of string values needs an enum.
- A tuple has a fixed structure and order; it is not just a normal array with a different name.
