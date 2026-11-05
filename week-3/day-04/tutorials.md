# Day 4 — Objects, Unions, Intersections, And Interfaces

## Objective

Describe the shape of objects and define reusable contracts with interfaces. Learn how to combine types and safely handle a value that may have more than one possible type.

You should finish today able to model pharmacy data with interfaces, extend an interface, describe optional properties and methods, and narrow a union type before using it.

## Video slot — 37m 03s total

Watch these lessons from **Elzero Web School — Learn TypeScript In Arabic 2022**:

1. **#19 — Data Types: Type Assertion** — 06:16  
   [YouTube](https://www.youtube.com/watch?v=tPSHBw_2huc)
2. **#20 — Union And Intersection Types** — 04:52  
   [YouTube](https://www.youtube.com/watch?v=Uf-ODplNJ7A)
3. **#21 — Type Annotations With Object** — 04:32  
   [YouTube](https://www.youtube.com/watch?v=7pjfbbZTOCU)
4. **#22 — Interface Declaration** — 06:29  
   [YouTube](https://www.youtube.com/watch?v=qopmfZ30_TQ)
5. **#23 — Interface Methods And Parameters** — 03:15  
   [YouTube](https://www.youtube.com/watch?v=ZOWwVhAUtZQ)
6. **#24 — Interface ReOpen And Use Cases** — 04:16  
   [YouTube](https://www.youtube.com/watch?v=7rJwXk_SuXQ)
7. **#25 — Interface Extends** — 03:46  
   [YouTube](https://www.youtube.com/watch?v=3iwthBqZwrM)
8. **#26 — Interface Final Discussion** — 03:37  
   [YouTube](https://www.youtube.com/watch?v=CaBIiFpxFTo)

### Concepts to understand

- Object type annotations
- Optional object properties (`?`)
- Type aliases for object shapes
- Type assertions with `as`
- Union types (`A | B`)
- Intersection types (`A & B`)
- Interface declaration
- Optional interface properties
- Interface method signatures
- Extending interfaces
- Interface declaration merging / reopening
- Structural typing
- Basic type narrowing with `typeof`, property checks, and conditional branches

### Important rule about type assertions

A type assertion tells the compiler how you want it to treat a value. It does **not** convert the value or check it at runtime.

Do not use `as` to force the compiler to accept data that you have not checked. For now, understand the syntax and use it only in small controlled examples.

### Interface vs type alias — practical starting point

- Use an `interface` to describe the expected shape of an object or a contract that another object should satisfy.
- Use a `type` alias for unions, tuples, literal types, intersections, and other type compositions.
- Both can describe object shapes. Do not waste time memorizing absolute rules; focus on choosing a clear, reusable model.
