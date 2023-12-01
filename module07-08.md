# Build JavaScript applications using TypeScript - MICROSOFT COURSE

## Modules

In TypeScript, modules are used to organize and encapsulate code. They provide a way to split your code into smaller, reusable pieces. Modules can contain functions, variables, classes, and more. TypeScript supports both ECMAScript modules (ES modules) and its own module system, known as "namespace modules" or "internal modules". ES modules use the import and export keywords to define and use modules, while namespace modules use the namespace keyword.

ES Modules Example:

```
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './mathUtils';

console.log(add(2, 3)); // Output: 5
```

Namespace Modules Example:

```
// mathUtils.ts
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

// main.ts
const result = MathUtils.add(2, 3);
console.log(result); // Output: 5
```

## Declaration files

Declaration files in TypeScript have the file extension `.d.ts` and are used to `describe the shape of JavaScript code that doesn't have native TypeScript support`. They provide type information for existing JavaScript libraries, allowing you to use them in a TypeScript project. Declaration files define the types of variables, functions, classes, and other entities in a JavaScript library, so that TypeScript can provide type checking and IntelliSense for that library.

## Type libraries

Type libraries, also known as "type definition libraries" or `typings`, are collections of `declaration files for existing JavaScript libraries`. They provide TypeScript type information for these libraries, allowing you to leverage the benefits of TypeScript when using them. Type libraries can be installed using package managers like npm or yarn, and they typically include declaration files for popular JavaScript libraries and frameworks such as React, Express, and jQuery.

## Exercise:

In this exercise, you'll install and implement a type library along with the library `dotenv`. This commonly used library loads environment variables from a .env file into process.env, enabling you to store configuration details in separate from your code and access them. You can use dotenv to manage things like connection strings and other values which may need to change depending on where your code is executing.

(See Main.ts exercise)

## Dotenv

```
import dotenv from 'dotenv';

dotenv.config();
```

(create the .env file)
Example:
DATABASE_URL=localhosterrergthdf34535ergdtyj7698909yuh

```
const databaseUrl = process.env.DATABASE_URL;
```

## Namespaces

```
// mathUtils.ts
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function multiply(a: number, b: number): number {
    return a * b;
  }
}

// main.ts
const result = MathUtils.add(2, 3);
console.log(result); // Output: 5

const product = MathUtils.multiply(2, 3);
console.log(product); // Output: 6


```

The `/// <reference path="...">` syntax in TypeScript is used to reference external TypeScript declaration files. These declaration files provide type information for external libraries or modules that are not written in TypeScript.

See the examples in files:

- module08_main.ts
- module08_loans.ts
- module08_loans-programs-ts

The `/// <reference path="module08_loans.ts" />` and `/// <reference path="module08_loan-programs.ts" />` statements are used to reference the TypeScript declaration files module08_loans.ts and module08_loan-programs.ts. These declaration files contain type definitions for the modules or functions used in your code.

By referencing these declaration files, the TypeScript compiler knows about the types and APIs provided by these modules and can provide better type checking and autocompletion in your code.

👉 It's important to note that in modern TypeScript projects, the use of /// <reference path="..."> is typically not necessary, as most projects use module systems like `CommonJS` or `ES modules``, where dependencies are managed through imports and exports. However, in certain cases, manual reference paths may still be used, especially when working with legacy code or specific build setups.

The `--outfile` option is used with the TypeScript compiler to specify the output file for the compiled JavaScript code. By default, the TypeScript compiler generates one JavaScript file for each TypeScript file in the project. However, if you want to combine multiple files into a single JavaScript file, you can use the --outfile option.

When using the --outfile option, you need to provide the path and filename for the output file. For example, to generate a single JavaScript file called bundle.js, you can use the following command:

```
tsc --outfile bundle.js
```

This will compile all the TypeScript files in the project and combine them into a single JavaScript file called bundle.js. It's important to note that when using --outfile, `the compiler will concatenate the files in the order specified by the --files option or by the order they are referenced in the project`.

👉 It's worth mentioning that the --outfile option is `deprecated` in favor of using module systems like CommonJS or ES modules, which allow for better code organization and separation.
