# Day 1 — TypeScript, The Compiler, And Basic Types

## Objective

Understand what TypeScript adds to JavaScript, set up a small TypeScript project, compile a `.ts` file, and use basic type annotations.

You should finish today able to explain why TypeScript exists, distinguish static type checking from JavaScript's runtime behavior, and fix simple type errors reported by the compiler.

## Video slot — 29m 43s total

Source: **Elzero Web School — Learn TypeScript In Arabic 2022**. [Course playlist](https://www.youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ)

Watch these specific lessons:

1. **#01 — Introduction And What Is TypeScript** — 04:00  
   [YouTube](https://www.youtube.com/watch?v=yUndnE-2osg)
2. **#02 — Install TypeScript And Transpile Files** — 03:41  
   [YouTube](https://www.youtube.com/watch?v=pc5IlcEn8vw)
3. **#03 — Create Configuration And Watch Files** — 08:37  
   [YouTube](https://www.youtube.com/watch?v=CSll1rsRPOI)
4. **#04 — Statically vs Dynamically Typed Languages** — 07:06  
   [YouTube](https://www.youtube.com/watch?v=OgxYA7G9HsM)
5. **#05 — Type Annotations And Any Data Type** — 06:19  
   [YouTube](https://www.youtube.com/watch?v=quwf-YbyHVg)

### Concepts to understand

- What TypeScript is
- How TypeScript relates to JavaScript
- Transpilation / compilation
- The `tsc` compiler
- Static type checking vs runtime behavior
- Type annotations
- Type inference
- `string`, `number`, `boolean`
- `null` and `undefined`
- The purpose and danger of `any`
- `tsconfig.json`
- Watch mode

Do not use `any` as an easy escape from compiler errors. Understand what it does, but prefer a specific type whenever possible.

## Setup

You already installed Node.js in Week 1. From the root of your learning repository, create the Week 3 project:

```bash
cd backend-career-shift
mkdir -p week-03/src
cd week-03
npm init -y
npm install --save-dev typescript
npx tsc --init
```

Create `week-03/.gitignore` with:

```gitignore
node_modules/
dist/
```

In `tsconfig.json`, make sure the following compiler options are configured. Keep the rest of the generated configuration unless you understand why you need to change it.

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

Create:

```text
week-03/src/day-01.ts
```

Compile the project:

```bash
npx tsc
```

Run the generated JavaScript:

```bash
node dist/day-01.js
```

Try watch mode:

```bash
npx tsc --watch
```

Keep the watch command running in one terminal while editing the TypeScript file in another. Stop it with `Ctrl+C` when finished.
