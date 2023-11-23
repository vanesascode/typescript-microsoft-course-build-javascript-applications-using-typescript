# Build JavaScript applications using TypeScript - MICROSOFT COURSE

## FUNCTIONS

Adding types to functions helps `prevent you from passing values that you shouldn't pass` to your functions. Typed functions are especially important when you're working with larger code bases or functions developed by others.

While adding types is a simple difference, it offers the benefit of type checking the values that you pass to the function and what is returned. `Instead of having to add all the logic to the function` to verify the correct value type has been passed to it and the return value is correct, TypeScript helps ensure the correct value types as you develop your code. In addition, when creating the function logic you'll have full autocomplete support, as your editor will know the datatype of the parameters - something JavaScript is typically unable to detect.

### 🔹 Hoisting

```
sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

The function sayHello() is hoisted to the top of the scope. As a result, we can call the function before its actual declaration.

It's important to note that hoisting can sometimes lead to unexpected behavior, so it's generally a good practice to declare and initialize variables at the beginning of their respective scope, and declare functions before they are used.

### 🔹 Named function

```
function addNumbers (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
```

### 🔹 Anonymous function

```
let addNumbers = function (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
```

### 🔹 Arrow Lambda

```
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
```

### 🔹 Check conditions

If you expect the input array to always contain valid numbers, then the if (isNaN(input[i])) condition and continue statement may not be necessary. However, including these checks can provide `additional robustness to handle unexpected or invalid input`.

```
let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));
```

### 🔹 Browsers support

`Arrow functions were introduced in ES2015` so not all browsers support them. By using TypeScript, you can take advantage of these function types and then transpile down to earlier JavaScript versions, if necessary, so your code will work with older browsers.

## PARAMETERS

The TypeScript compiler assumes, by default, that all parameters defined in a function are required. When a function is called, the TypeScript compiler verifies:

- A value has been provided for each parameter.
- Only parameters that the function requires are passed to it.
- The parameters are passed `in the order in which they're defined` in the function.

These requirements are different from JavaScript. JavaScript assumes that all parameters are optional and allows you to pass more (or fewer) arguments to the function than are defined by it.

### 🔹 Optional Parameters

```
function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1
```

In this example, x is required and y is optional. The optional parameter must come after any required parameters in the parameter list. Also, for this function to return the correct value, you must address `the possibility that y may be passed in as undefined`.

### 🔹 Default Parameters

```
function addNumbers (x: number, y = 25): number {
   return x + y;
}

addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26
```

### 🔹 Rest Parameters

```
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
```

### 🔹 Deconstructed object parameters

Function parameters are positional and must be passed in the order in which they're defined in the function. Positional parameters can make your code less-readable when calling a function with multiple parameters that are optional or the same data type.

To enable named parameters, you can use a technique called deconstructed object parameters. This technique enables you to use an interface to defined named, rather than positional, parameters in your functions.

```
interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});
```

---

The position of the optional parameters matter.

ERROR: A required parameter cannot follow an optional parameter.

```
let addThreeNumbers = (x: number, y?: number, z: number): number => x + y + z;
```

ERROR: 'z' is possibly 'undefined'.

```
let addThreeNumbers = (x: number, y?: number, z: number): number => x + y + z;
```

OK:

```
let addThreeNumbers = (x: number, y: number, z?: number): number => {
   if (z === undefined) {
      return x + y ;
   } else {
      return    x + y + z;
   }

}
```

## REMEMBER: An interface is better if you want to have the option of extending the function type. A type alias is better if you want to use unions or tuples.

```
type calculator = (x: number, y: number) => number;

```

OR (but change the capital letter of the type in the code below):

```
interface Calculator {
    (x: number, y: number): number;
}
```

Let's use the type:

```
let addNumbers: calculator = (x, y) => x + y;
let subtractNumbers: calculator = (x, y) => x - y;

console.log(addNumbers(1, 2));        // Output: 3
console.log(subtractNumbers(1, 2));   // Output: -1
```

```
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
```

```
let result1 = doCalculation('add')(1, 2);
console.log(result1);  // Output: 3

let result2 = doCalculation('subtract')(5, 3);
console.log(result2);  // Output: 2
```
