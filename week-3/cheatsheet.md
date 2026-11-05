# Week 3 Cheatsheet — TypeScript Foundations

Syntax reminders only. Try it yourself first.

---

## Setup & Compiler

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init          # create tsconfig.json
npx tsc                 # compile src/ → dist/
npx tsc --watch         # recompile on save
node dist/day-01.js     # run the generated JS
```

```text
.gitignore
  node_modules/
  dist/
```

Key `tsconfig.json` options:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "noEmitOnError": true,
    "skipLibCheck": true
  }
}
```

TypeScript checks types at compile time. Annotations disappear from the generated JavaScript. They do **not** validate runtime input.

---

## Day 1 — Basic Types

```ts
let name: string = "Panadol";
let price: number = 50;
let available: boolean = true;
let middleName: string | null = null;

let quantity = 10;      // inferred as number
// name = 5;            // Error: number is not assignable to string

let anything: any = "x";   // avoid unless you truly need it
```

`null` and `undefined` are their own types. With `strictNullChecks` (part of `strict`), a `string` cannot be `null` unless the type says so.

---

## Day 2 — Arrays & Functions

```ts
const names: string[] = ["Panadol", "Brufen"];
const prices: number[] = [50, 60];
const alsoNumbers: Array<number> = [1, 2, 3];
const shelves: number[][] = [[10, 5], [0, 3]];   // array of arrays

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

function isAvailable(quantity: number): boolean {
  return quantity > 0;
}

function getLabel(name: string, strength?: string): string {
  return strength ? `${name} ${strength}` : name;
}

function discount(price: number, percentage = 0): number {
  return price - price * (percentage / 100);
}

function average(...scores: number[]): number {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, n) => sum + n, 0) / scores.length;
}

const add = (a: number, b: number): number => a + b;
const add2 = function (a: number, b: number): number { return a + b; };
```

`?` = optional (may be omitted) · `= 0` = default (used when omitted) · `...` = rest (collects remaining arguments into an array).

---

## Day 3 — Aliases, Literals, Tuples, Enums

```ts
type MedicineId = number;
type MedicineName = string;

type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

type Medicine = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type SearchTerm = number | string;          // union
type StockMovement = [string, number, string];  // tuple: fixed order

function log(message: string): void {
  console.log(message);
}

function fail(message: string): never {
  throw new Error(message);
}

enum MedicineCategory {
  PainRelief = "Pain Relief",
  Antibiotic = "Antibiotic",
  Other = "Other"
}
```

- `void` = returns nothing useful.
- `never` = can never finish normally (always throws or loops forever).
- Tuple = fixed length and fixed position types; a normal array is not a tuple.
- Literal union = one of a small set of exact values; often simpler than an enum.

---

## Day 4 — Objects, Unions, Intersections, Interfaces

```ts
interface Medicine {
  id: number;
  name: string;
  price: number;
  quantity: number;
  manufacturer?: string;          // optional property
  totalValue?(): number;          // optional method signature
}

interface Supplier {
  name: string;
  phone: string;
}

interface DetailedMedicine extends Medicine {
  category: MedicineCategory;
  supplier: Supplier;
}

type AuditedMedicine = Medicine & {
  createdAt: string;
  updatedAt: string;
};                                 // intersection

const med: Medicine = {
  id: 1,
  name: "Panadol",
  price: 50,
  quantity: 10
};
```

### Union narrowing

```ts
function findMedicine(identifier: number | string) {
  if (typeof identifier === "number") {
    // here identifier is number
  } else {
    // here identifier is string
  }
}
```

### Discriminated union

```ts
type Result =
  | { success: true; data: Medicine }
  | { success: false; error: string };

function printResult(result: Result): void {
  if (result.success) {
    console.log(result.data.name);
  } else {
    console.log(result.error);
  }
}
```

### Type assertions

```ts
const value = "Panadol" as string;   // tells the compiler, does not convert
const med2 = someData as Medicine;   // does NOT check runtime data
```

Use `as` only when you know more than the compiler. Do not use it to silence errors.

### type vs interface

- `interface` → object shapes and contracts; can be extended, reopened, merged.
- `type` → unions, intersections, tuples, literal types, aliases; also object shapes.
- Both work for objects. Choose the clearer model for the job.
