# Build JavaScript applications using TypeScript - MICROSOFT COURSE

Although JavaScript is used to create `cross-platform apps`, it wasn't conceived for large apps involving thousands, or even millions, of lines of code. JavaScript lacks some of the features of more mature languages that power today's sophisticated applications. `Integrated development editors (IDEs)` can find it challenging to manage JavaScript and maintain these large code bases.

The core feature of TypeScript is its `type system`. In TypeScript, you can identify the data type of a variable or parameter by using a type hint. With `type hints`, you describe the shape of an object, which provides better documentation and allows TypeScript to `validate that your code is working correctly`.

- Through `static type checking`, TypeScript `catches code issues` early in development that JavaScript can't normally catch until the code is run in the browser.

- Types also let you `describe what your code is intended to do`. If you're working on a team, a teammate who comes in after you can easily understand it too.

---

## TypeScript compatibility with JavaScript

TypeScript is a strict superset of `ECMAScript 2015 (ECMAScript 6 or ES6)`.

When you write TypeScript code, it needs to be transformed into JavaScript code in order to run in a JavaScript environment. This transformation is done by using the TypeScript compiler or a TypeScript-compatible transpiler. In any case, the end result is that your TypeScript code is transformed into JavaScript code that can be executed by a JavaScript engine.

- The `TypeScript compiler` is a tool provided by the TypeScript language itself. It takes TypeScript code as input and produces equivalent JavaScript code as output. It performs various operations such as type checking, transpiling TypeScript features into JavaScript equivalents, and generating source maps for debugging. To compile this TypeScript code using the TypeScript compiler, you can run the following command:`tsc myFile.ts` This will generate a JavaScript file.

- A `TypeScript-compatible transpiler`, on the other hand, is a tool that is not part of the official TypeScript implementation but can still transform TypeScript code into JavaScript. These transpilers often provide additional features or optimizations that are not available in the TypeScript compiler. For example, you could use `Babel`, `swc` or `Sucrase` by installing its plugins and presets and configuring it, in order to create a Javascript file.

---

## [JSDoc](https://jsdoc.app/) to add documnetation comments to your code

VSCODE Settings:

![image](https://github.com/vanesascode/threds-socialmedia-app-nextjs14-mongodb-clerk-svix/assets/131259155/4bf59a9f-65b5-4c3c-acd5-a0560bf017ad)

In VSCODE, type `/**` before your code and click on the `IntelliSense suggestion`. You'll get something like this before your code:

```
/**
 *
 * @param {*} name
 * @param {*} email
 * @param {*} password
 * @param {*} data
 * @returns
 */

const userRegister = (name, email, password, data) => {
  console.log(name, email, password, data);
  return {
    name: name,
    email: email,
    password: password,
    data: data
  };
};

export { userRegister };
```

Then, you can finish completing it (using `tab`):

```
/**
 * Registers a user.
 *
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {object} data - Additional data for the user.
 * @return {boolean} Returns true if the user is successfully registered.
 */
```

The beauty of this is that if you hover over the function userRegister now, all the docummentation will appear as an IntelliSense suggestion.

Also, if you add `//@ts-check` before your code it will make your code complain if any of the rules you set in the JSDoc are not followed:

![image](https://github.com/4GeeksAcademy/proyecto_final_SWITCH/assets/131259155/a7ec9bcb-ef7b-49e0-98c6-8deaf30071cf)

Or you can create a `jsconfig.json` file which will check the types of your entire proyect:

```
{
  "compilerOptions": {
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

More info [here](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript)

---

## TypeScript

### When you install TypeScript, you are installing a `programming language` and a `compiler`.

You need to first install the TypeScript library. The library also contains the TypeScript compiler, which is called `tsc`.

Type `tsc` in the terminal to see all the `common commands`
When you run tsc with no parameters, it compiles all the .ts files in the current folder and generates a .js file for each one.

If the compiler finds errors in the code, it displays them in the command window. Fix the errors in the TypeScript file, and then rerun the tsc command.

### Compiler options:

Example of `tsconfig.json`file:

```
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "noImplicitAny": true,
    "esModuleInterop": true
  },
  "include": ["*.ts"],
  "exclude": ["node_modules"]
}

```

The `--noImplicitAny` option instructs the compiler to raise errors on expressions and declarations with an implied any type. You can also do it when compiling in the terminal:

```
tsc testToBeCompiled.ts --noImplicitAny
```

The `--target` option specifies the ECMAScript target version for the JavaScript file. This example compiles an ECMAScript 6 compliant JavaScript file:

```
tsc utility_functions.ts --target "ES2015"
```

More CLI compiler options [HERE](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

The `noEmitOnError` compiler option in TypeScript determines whether the compiler should emit JavaScript output files (\*.js files) when there are errors in the TypeScript code.

```
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

The `outDir` option in the compilerOptions section of your tsconfig.json file specifies the output directory for the compiled JavaScript files.

The `dist` directory is typically used to store the final output of the build process, which includes the compiled JavaScript files, assets, configuration files, and any other files necessary for running the application or deploying it to a production environment.

Setting `esModuleInterop` true is recommended when working with modern JavaScript module systems, as it provides better compatibility and reduces the need for additional configuration or workarounds.

Example of options in a NextJS project by default:

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

The `lib` option is useful for specifying the specific JavaScript APIs and features that your project relies on. It helps ensure that your TypeScript code is compatible with the targeted runtime environment and provides accurate type checking for the APIs you use.

The `allowJs` option allows you to include and compile JavaScript files (\*.js) in your TypeScript project.

### `tsc --init`

This command creates a tsconfig.json file that contains all the configuration options for the TypeScript compiler. You can comment them on or off.

When you save your tsconfig.json file, at the command prompt, enter tsc. This command reads the tsconfig.json file and `resets the options for the project`.

### 👉 CAREFUL: When you run the tsc command on a single file, the compiler ignores the tsconfig.json file.
