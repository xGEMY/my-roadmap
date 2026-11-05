# Backend Career Shift — Week 3

## TypeScript Foundations And The Type System

**Time commitment:** 20 hours total  
**Schedule:** 4 days × 5 hours  
**Week:** 3  
**Learning mode:** Self-study + handwritten/code-by-hand labs  
**Primary language:** TypeScript (building on JavaScript from Weeks 1–2)  
**Version control:** Git + GitHub  
**AI policy:** AI may be used **only after attempting an exercise**, and only to verify, test, explain an error, or give a conceptual hint. It must not write the solution.

---

## Week 3 Goal

This week is your transition from JavaScript to **TypeScript**.

You already know how to write basic JavaScript programs, manipulate arrays and objects, create functions, and use Git. Now you will learn how TypeScript adds a type system that helps you describe the data your program expects and catch many mistakes before the program runs.

By the end of this week, you should be able to create a small TypeScript project, compile it into JavaScript, annotate variables and functions, describe arrays and object shapes, compose types, and use interfaces to define contracts.

You will learn:

- What TypeScript is and how it relates to JavaScript
- Static vs dynamic typing
- The TypeScript compiler (`tsc`)
- `tsconfig.json` and watch mode
- Type annotations and type inference
- Primitive types
- Typed arrays and multi-dimensional arrays
- Function parameter and return types
- Optional, default, and rest parameters
- Type aliases
- Literal types
- Tuples
- `void` and `never`
- Enums
- Type assertions
- Union and intersection types
- Object type annotations
- Interfaces, optional properties, methods, and extension
- Basic type narrowing

### Not this week

Do **not** study:

- Classes and OOP in depth
- Constructors, inheritance, abstract classes, or polymorphism
- Generics
- Utility types such as `Partial`, `Pick`, and `Omit`
- Advanced conditional or mapped types
- Node.js APIs
- Express or NestJS
- PostgreSQL
- HTTP APIs
- React/Angular

Those come later. This week, focus on understanding and using TypeScript's **type system**. Week 4 will introduce OOP directly in TypeScript.

---

## Daily Content

Each day has its own tutorials file (video links + concepts) and lab exercises file:

| Day | Tutorials | Labs |
|---|---|---|
| Day 1 — TypeScript, The Compiler, And Basic Types | [day-01/tutorials.md](day-01/tutorials.md) | [day-01/labs.md](day-01/labs.md) |
| Day 2 — Typed Arrays And Functions | [day-02/tutorials.md](day-02/tutorials.md) | [day-02/labs.md](day-02/labs.md) |
| Day 3 — Type Aliases And More TypeScript Types | [day-03/tutorials.md](day-03/tutorials.md) | [day-03/labs.md](day-03/labs.md) |
| Day 4 — Objects, Unions, Intersections, And Interfaces | [day-04/tutorials.md](day-04/tutorials.md) | [day-04/labs.md](day-04/labs.md) |

## Graduation Project

See [graduation-project.md](graduation-project.md) for the Final Week 3 Challenge and the Week 3 Graduation Gate.

---

# Rules for the Entire Week

### 1. You must type the code yourself

Do not copy the code from the video. Pause the video, close it, and reproduce the idea yourself.

### 2. No AI-generated solutions

You may ask AI to:

- generate test cases for your solution
- check whether your output matches a requirement
- explain a TypeScript compiler error
- explain a concept you already attempted to use
- give you a hint without giving the solution

You may **not** ask:

- "Solve this exercise."
- "Write the code for me."
- "Fix my whole solution."
- "Give me the answer."
- "Convert all my JavaScript code to TypeScript."

### 3. Try before asking

When stuck:

1. Read the problem again.
2. Write down what data the program receives and what it must return.
3. Decide which types describe that data.
4. Try a solution.
5. Read the compiler error carefully.
6. Only then ask for a conceptual hint.

### 4. Do not silence the compiler

A TypeScript error is useful feedback. Do not solve it by adding `any`, using `as` everywhere, or disabling strict checks.

Understand why the compiler complains and correct the type or the implementation.

### 5. Keep every day's work

Use the same repository from Weeks 1 and 2 and add a Week 3 folder:

```text
backend-career-shift/
├── week-01/
├── week-02/
└── week-03/
    ├── src/
    │   ├── day-01.ts
    │   ├── day-02.ts
    │   ├── day-03.ts
    │   ├── day-04.ts
    │   └── pharmacy-stock-report.ts
    ├── dist/                 # Generated JavaScript; do not edit manually (ignored by Git)
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
```

Do not delete failed attempts. They are part of your learning record.

### 6. Commit your work

Continue using Git.

Make meaningful commits after completing each day's work. Push your completed Week 3 work to GitHub.

### 7. TypeScript does not validate runtime data

Remember this important distinction:

- TypeScript checks your code during development/compilation.
- Type annotations are removed when TypeScript is compiled to JavaScript.
- A type annotation does **not** automatically validate data received from a user, file, API, or database at runtime.

Runtime validation will be studied later when you learn backend APIs.

---

# Daily Structure

Each day is exactly **5 hours**.

| Activity | Time |
|---|---:|
| Learn / watch videos | ~1 hour maximum |
| Recall + reproduce examples | ~30 min |
| Break | ~10 min |
| Lab exercises | ~2h 30m |
| Review + self-test | ~50 min |
| **Total** | **5 hours** |

The video slot is a **maximum of 60 minutes**. The selected videos below are shorter than that limit. Do not fill the remaining time by watching unrelated videos; use it to pause, reproduce examples, and make sure you understand the lesson.

The videos are from **Elzero Web School — Learn TypeScript In Arabic 2022**. The lessons are short, sequential, and explained in Arabic. Their titles and durations were checked against Elzero's official TypeScript study plan. [Official study plan](https://elzero.org/study/typescript-study-plan/) · [YouTube playlist](https://www.youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ)

---

# AI Verification Protocol

After completing an exercise yourself, AI may be used for verification.

Good prompts:

> Here is my TypeScript solution and the exercise requirements. Do not rewrite my code. Give me 5 test cases I can use to verify it.

> Here is my TypeScript compiler error. Explain what the error means in beginner-friendly terms. Do not provide the corrected code.

> Here is my interface and the object I created. Tell me which properties do not satisfy the interface. Do not rewrite the object for me.

> Here is my function. Tell me whether its parameter and return types correctly describe the requirements. Do not change the implementation.

> I attempted this problem for 20 minutes. Give me one conceptual hint only, without pseudocode or code.

Bad prompts:

> Solve this for me.

> Write the interface and functions for me.

> Fix this code completely.

> Convert my JavaScript solution to TypeScript.

> Tell me which type to use for every line.

---

# End-of-Week Reflection

Write this in a separate file: `week-03/reflection.md`.

```text
1. The easiest TypeScript concept for me was:

2. The hardest TypeScript concept for me was:

3. The difference between JavaScript and TypeScript that I understand best is:

4. The compiler error that taught me the most was:

5. The difference between a type alias and an interface that I understand is:

6. The exercise I could not solve immediately was:

7. What I learned from solving it:

8. What I still do not understand:

9. What I can now build with TypeScript without a tutorial:

10. My confidence this week (1–10):
```

Bring this reflection to the Week 4 review.

---

## Next Week

Week 4 will introduce **Object-Oriented Programming (OOP) directly in TypeScript**.

You will learn classes, objects, constructors, properties, methods, access modifiers, encapsulation, inheritance, composition, abstract classes, and polymorphism.

Do not study next week's material early. Finish the Week 3 graduation gate first.
