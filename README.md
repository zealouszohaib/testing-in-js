## 🧪 Installing Testing and TypeScript Dependencies

Install the necessary packages for a TypeScript + Jest setup:

```bash
npm init -y
npm install -D typescript jest ts-jest @types/jest ts-node
````

* `jest`: Testing framework
* `ts-jest`: Transpiles TypeScript in tests
* `@types/jest`: Jest types for TypeScript
* `ts-node`: Runs TypeScript directly
* `typescript`: TypeScript compiler

---

## ⚙️ Setting Up Jest for TypeScript

Generate a Jest config file tailored for TypeScript:

```bash
npx ts-jest config:init
```

Creates `jest.config.ts` with proper defaults (e.g., transformers).

```bash
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: 'node',
    verbose: true,
}

export default config;
```

---
# TypeScript Configuration 🚀

## Setup Instructions

Create a file `tsconfig.json` and add the following configuration:

```json
{
    "compilerOptions": {
        "esModuleInterop": true
    }
}
```
---

## 🐞 Debugging Tests in VS Code

### 1. Create `launch.json`

Go to **Run & Debug** → "create a `launch.json`" → select **Node.js**.

### 2. Add Jest Config

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Jest Tests",
  "program": "${workspaceFolder}/node_modules/jest/bin/jest.js",
  "args": ["--runTestsByPath", "${relativeFile}"],
  "console": "integratedTerminal",
  "skipFiles": ["<node_internals>/**", "node_modules/**"]
}
```

* Runs only the current file
* Skips unnecessary library code during step-through

> More: [VS Code Jest Debugging Recipes](https://github.com/microsoft/vscode-recipes/tree/main/debugging-jest-tests)

---

## ✅ Jest Coverage Report

### Purpose:

Show how much of your code is covered by tests:

* Statements
* Branches
* Functions
* Lines

### Run It:

```bash
npx jest --coverage
```

### Output:

* Terminal summary
* `coverage/` folder with `index.html` report

### Optional: Enable by Default

In `jest.config.ts`:

```ts
export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "lcov"]
};
```

