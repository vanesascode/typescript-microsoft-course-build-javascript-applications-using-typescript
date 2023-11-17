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

- A `TypeScript-compatible transpiler`, on the other hand, is a tool that is not part of the official TypeScript implementation but can still transform TypeScript code into JavaScript. These transpilers often provide additional features or optimizations that are not available in the TypeScript compiler. For example, you could use `Babel`, by installing its plugins and presets and configuring it, in order to create a Javascript file.

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
