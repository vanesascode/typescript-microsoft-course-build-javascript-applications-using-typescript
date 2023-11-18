# Build JavaScript applications using TypeScript - MICROSOFT COURSE

## Types and subtypes in TypeScript

![image](https://github.com/MicrosoftDocs/mslearn-typescript/assets/131259155/9f9b3859-0d31-4eb3-a532-ceefb52a81e5)

### 🔹 Number and BigInteger types

In TypeScript, the `bigint` type is a built-in primitive type introduced in ECMAScript 2020 for representing `arbitrary-precision integers`. It allows you to work with integers that are larger than the range of standard numeric types like number.

In the given example, big is declared as a variable of type bigint and assigned the value 100n. The n suffix is used to indicate that the value is of type bigint.

```
let big: bigint = 100n;

console.log(big); // Output: 100n
console.log(typeof big); // Output: bigint

// Arithmetic operations with bigint
let result = big + 200n;
console.log(result); // Output: 300n
```

### 🔹 String type

In TypeScript, you can also use template strings, which can span multiple lines and have embedded expressions.

```
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
```

### 🔹 Enum type

Enums, short for enumerations, are a feature in many programming languages that allow you to define a set of named constants. Enums provide a way to define a collection of related values that can be assigned to variables or used as a data type.

Example:

```
enum ContractStatus {
     Permanent,
     Temp,
     Apprentice
}
```

Now, declare a variable for a new employee named employeeStatus of the type ContractStatus and assign "Temp":

```
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);  // result: 1

```

By default, enum values begin with a value of 0, so Permanent is 0, Temp is 1, and Apprentice is 2. If you want the values to start with a different value, in this case 1, specify that in the enum declaration. Make the following edits to have the enum start the values at 1.

```
enum ContractStatus {
     Permanent = 1,
     Temp,
     Apprentice
}
```

Then:

```
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); // result: 2

console.log(ContractStatus[employeeStatus]); // result: 2
```

Another example:

```
enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Green;
console.log(color); // Output: 1

if (color === Color.Green) {
  console.log("The color is green!");
}
```

### 🔹 Any type

Careful with 'any':

```
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error
```

Remember that all the convenience of any comes at the cost of `losing type safety`. Type safety is one of the main motivations for using TypeScript. You should avoid using any when it's not necessary.

### 🔹 Unkonwn type

The core difference between any and unknown is you are unable to interact with a variable of type unknown; doing so generates a `compiler error`. any bypasses any compile-time checks, and the object is evaluated at runtime; if the method or property exists it will behave as expected.

It will now raise type check errors and `prevent you from compiling the code until you take appropriate action` to resolve them:

```
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown
```

### 🔹 Type assertion

It tells the compiler "trust me, I know what I’m doing." A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime effect and is used purely by the compiler.

Type assertions have two forms. One is the `as-syntax`:

```
(randomValue as string).toUpperCase();
```

The other version is the `angle-bracket` syntax:

```
(<string>randomValue).toUpperCase();
```

### 👉 `as` is the preferred syntax. Some applications of TypeScript, such as JSX, can get confused when using < > for type conversions.

## 🔹 Safety compiler options:

Using TypeScript's compiler options like strictNullChecks, strictFunctionTypes, and noImplicitAny can help identify and prevent type conflicts by enforcing stricter type checking rules:

`strictNullChecks`: stricter checks on null and undefined values. It helps prevent null or undefined values from being assigned to variables or passed as function arguments when the corresponding type does not permit it. This option helps catch potential null or undefined errors at compile-time.

`strictFunctionTypes`: stricter assignment checks for function types. It ensures that function parameters and return types must be compatible in all function assignments, including callbacks and function overloads. This helps catch function-related type errors early and promotes type safety in function assignments.

`noImplicitAny`: TypeScript flags any variables or function return types that are implicitly inferred as any. It requires explicit type annotations for variables and function return types where TypeScript cannot infer the type. This option helps identify potential type conflicts and encourages developers to provide explicit type annotations for better code clarity and maintainability.

## 🔹 Type guards

```
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
```

The previous example demonstrates the use of typeof in the if block to examine the type of an expression at runtime. This conditional test is called a type guard.

## 🔹 Union types ( | )

Another example of `type guard` with union types:

```
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```

## 🔹 Intersection types ( & )

```
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
```

## 🔹 Literal types

```
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid
```

## 🔹 Collection types

-- Arrays:

```
let list: number[] = [1, 2, 3];
```

```
let list: Array<number> = [1, 2, 3];
```

There's no advantage to using one over the other, so it's up to you to decide which syntax to use.

-- Tuples:

An array that contains values of mixed types. `order` must also be respected.

```
let myTuple: [string, number, boolean] = ["hello", 42, true];
```
