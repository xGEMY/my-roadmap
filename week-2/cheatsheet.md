# Week 2 Cheatsheet — Practical JavaScript + Git

Syntax reminders only. Try it yourself first.

---

## Day 1 — Numbers & Strings

```js
parseInt("150")          // 150
parseFloat("19.75")      // 19.75
Number("54.999")         // 54.999
(12.786).toFixed(2)      // "12.79"  (returns a string!)
Number.isInteger(5)      // true
Number.isNaN(NaN)        // true

Math.round(4.5)  Math.floor(4.9)  Math.ceil(4.1)
Math.max(1, 9)   Math.min(1, 9)
Math.floor(Math.random() * 10) + 1   // 1–10

const s = "  panadol extra ";
s.length  s[0]  s.charAt(0)
s.trim()  s.toUpperCase()  s.toLowerCase()
s.includes("extra")  s.startsWith("pan")  s.endsWith("ra")
s.slice(0, 5)  s.substring(0, 5)
s.split(" ")             // array of parts
```

---

## Day 2 — Control Flow & Arrays

```js
const label = age >= 18 ? "adult" : "minor";   // ternary
const qty = input ?? 0;    // fallback only for null/undefined
const qty2 = input || 0;   // fallback for ANY falsy (0, "", false…)

switch (choice) {
  case 1:
    console.log("Add");
    break;
  default:
    console.log("Unknown");
}

nums.sort((a, b) => a - b);   // numbers: always pass a compare fn
names.sort();                 // strings: alphabetical
arr.slice(1, 3)               // copy part, original untouched
words.join(", ")              // array → string

for (...) {
  if (x === 0) continue;      // skip this item
  if (x > 15) break;          // stop the loop
}
```

---

## Day 3 — Functions, Scope & Git Basics

```js
function sum(...nums) { }            // rest params → array
const add = function (a, b) { return a + b; };  // anonymous
const add2 = (a, b) => a + b;        // arrow, implicit return
const square = x => x * x;

let g = 1;                            // global
function f() { let local = 2; }       // local: invisible outside f
if (true) { let b = 3; }              // block-scoped
```

```bash
git init                  # start a repo
git status                # what changed?
git add day-01.js         # stage
git commit -m "message"   # save a snapshot
git diff                  # unstaged changes
git log                   # history
```

---

## Day 4 — Higher-Order Functions & GitHub

```js
nums.map(n => n * 2)                    // transform every item → new array
nums.filter(n => n % 2 === 0)           // keep matching items → new array
nums.reduce((acc, n) => acc + n, 0)     // combine into one value
nums.forEach(n => console.log(n))       // action per item, returns undefined

medicines
  .filter(m => m.quantity > 0)
  .map(m => m.name)
  .join(", ");
```

```bash
git remote add origin <url>   # link to GitHub
git push -u origin main       # first push
git push                      # later pushes
git pull                      # get remote changes
git clone <url>               # copy a repo locally
```

Need a new array → `map`/`filter`. Need one value → `reduce`. Just doing something → `forEach`.
