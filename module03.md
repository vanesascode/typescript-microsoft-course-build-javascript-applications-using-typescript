# Build JavaScript applications using TypeScript - MICROSOFT COURSE

## Interfaces

After defining an interface, you can use it as a `type` and get all the benefits of `type checking` and `Intellisense`.

### Structural type system in TypeScript:

In TypeScript, the structural type system is a type-checking system that determines type `compatibility based on the structure` or shape of the types, rather than relying solely on explicit type declarations or inheritance relationships.

In a structural type system, two types are considered compatible if their members (properties and methods) have compatible types. This means that if two types have the same structure or shape, they are considered compatible, even if they are defined separately or come from different inheritance hierarchies.

```
interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  salary: number;
}

let person: Person = { name: "John", age: 30 };
let employee: Employee = person; // Assigning a Person to an Employee

console.log(employee); // Output: { name: "John", age: 30 }
```

In this example, the Person interface and the Employee interface have the same structure with matching properties (name and age). TypeScript considers these two types to be compatible because of their structural compatibility. Therefore, you can assign a value of type Person to a variable of type Employee.

In TypeScript, the term `assigned` refers to the act of assigning a value of one type to a variable or property of another type:

```
interface Ball {
  diameter: number;
}

interface Tube {
  diameter: number;
  length: number;
}

let ball: Ball = { diameter: 10 };
let tube: Tube = ball; // Assigning a Ball to a Tube

console.log(tube); // Output: { diameter: 10, length: undefined }
```

See the next example:

```
let createBall = (diameter: number) => ({ diameter });
let createSphere = (diameter: number, useInches: boolean) => {
  return { diameter: useInches ? diameter * 0.39 : diameter };
};

createBall = createSphere; // Assigning createSphere to createBall is allowed
createSphere = createBall; // Assigning createBall back to createSphere is not allowed

```

The reason is that the createSphere function expects two parameters (diameter and useInches), while the createBall function expects only one parameter (diameter).

In TypeScript, when assigning a function to another function variable, the assigned function must have the same or fewer parameters compared to the target function.

For example the array's forEach's callback has three params, value, index and the full array - if TypeScript didn't support `discarding parameters`, then you would have to include every option to make the functions match up:

```
[createBall(1), createBall(2)].forEach((ball, _index, _balls) => {
  console.log(ball);
});
```

No one needs that.

## Interfaces VS Type aliases

A type alias is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type. Interfaces, on the other hand, are a way to describe data shapes, for example, an object. Type aliases can act like interfaces; however, there are some subtle differences.

The key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable (using the keywords `extends`):

```
type MyType = {
  name: string;
};

// Error: A type alias cannot be extended to add new properties.
type MyExtendedType = MyType & {
  age: number;
};
```

```
interface MyInterface {
  name: string;
}

// Interface can be extended to add new properties.
interface MyExtendedInterface extends MyInterface {
  age: number;
}

let obj: MyExtendedInterface = {
  name: "John",
  age: 30,
};
console.log(obj); // Output: { name: "John", age: 30 }
```

Also, you can only describe a union or tuple using a type alias:

```
type MyUnion = string | number | boolean;

type Point = [number, number];
```

In TypeScript, type aliases can define composite types such as objects and unions as well as primitive types such as numbers and strings; `interface, however, can only define objects`. Interface is useful in typing objects written for object-oriented programs.

We can say that the primary job of an interface is to `describe the properties and return types of an object.`.

See how the parameter "loanTerms" is treated as an object:

```
    interface Loan {
            principle: number,
            interestRate: number
        }

    interface ConventionalLoan extends Loan {
        months: number      //* Total number of months
    }

    function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
        let interest: number = loanTerms.interestRate / 1200;
        let payment: number;
        payment = loanTerms.principle * interest;
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }

    function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
        let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
        let payment: number;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }

    let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
    let conventionalPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});

    console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"
    console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"

```

## Declaring interfaces

### The TypeScript coding guidelines suggest interfaces should not start with the letter I.

The TypeScript coding guidelines, as suggested by the TypeScript community, do not recommend starting interfaces with the letter "I". This guideline is a departure from traditional naming conventions used in languages like C# or Java, where interfaces often start with the letter "I".

The rationale behind this guideline is to avoid unnecessary verbosity and make the code more readable and concise. Since TypeScript has structural typing, where types are determined by their structure rather than their names, there is no need to indicate that a symbol represents an interface explicitly.

Instead, it is suggested to use descriptive and meaningful names that convey the purpose or functionality of the interface. This helps improve code readability and maintainability. For example, instead of naming an interface IPerson, consider naming it Person:

```
// Not recommended
interface IPerson {
  name: string;
  age: number;
}

// Recommended
interface Person {
  name: string;
  age: number;
}

```

![image](https://github.com/vanesascode/typescript-microsoft-course-build-javascript-applications-using-typescript/assets/131259155/6408d4df-2781-400f-b72b-55480a1f6c07)

### Readonly:

```
class Person {
  readonly firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("John", "Doe");

console.log(person.firstName); // Output: "John"

// Error: Cannot assign to 'firstName' because it is a read-only property.
person.firstName = "Jane";
```

###

## Extending Interfaces:

Two interfaces can have the same property if the property has the exact same name and type:

```
interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  position: string;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}

const employee: Employee = {
  name: "John",
  age: 30,
  position: "Developer",
};

greet(employee); // Output: Hello, John!
```

If two interfaces have a property with the same name but different types, you must declare a new property such that the resulting property is a subtype of both interfaces.

## Index signatures:

An index signature is a way to define dynamic property names and their corresponding types for an object or interface.

With keys:

```
interface Dictionary {
  [key: string]: number;
}

const myDict: Dictionary = {
  apple: 1,
  banana: 2,
  cherry: 3,
};

console.log(myDict.apple); // Output: 1
console.log(myDict.banana); // Output: 2
console.log(myDict.cherry); // Output: 3
```

With index:

```
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr); //"chocolate"
```

## Describing a JavaScript API using an interface

This example declares an interface called Post for the return types in a JSON file and then uses fetch with async and await to generate a strongly typed response.

```
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();
```

## A class implementing an interface:

To apply a TypeScript interface to a class, add the `implements` keyword after the class name followed by the interface name. TypeScript will check and ensure that the object actually implements all the properties and methods defined inside the interface (and can add extra ones)

```
interface Shape {
  area: number;
  computeArea: () => number;
}

class Circle implements Shape {
  radius: number;
  area: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
    this.area = this.computeArea();
  }

  computeArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  display(): void {
    console.log(`This circle has a radius of ${this.radius} and a color of ${this.color}.`);
  }
}

const newCalculation = new Circle(5, "blue")
interface Shape {
  area: number;
  computeArea: () => number;
}

class Circle implements Shape {
  radius: number;
  area: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
    this.area = this.computeArea();
  }

  computeArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  display(): void {
    console.log(`This circle has a radius of ${this.radius} and a color of ${this.color}.`);
  }
}

const newCalculation = new Circle(5, "blue")
newCalculation.display(); // Output: This circle has a radius of 5 and a color of red.
const result = newCalculation.computeArea()
console.log(result) // 78.53981633974483
```
