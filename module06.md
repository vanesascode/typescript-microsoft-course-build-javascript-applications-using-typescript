# Build JavaScript applications using TypeScript - MICROSOFT COURSE

## Generics VS Any

- Generics: Generics allow you to define a template for a function or class that can work with different types. `The specific type is not decided until the template is instantiated`, and the compiler will check that the provided type satisfies the constraints defined in the template. This ensures that the code remains type-safe even when working with different data types.

```
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
```

- any: The any type represents any possible value, allowing you to assign any value to a variable or pass any value to a function without type checking. While this provides maximum flexibility, it also compromises type safety. `The compiler won't check the type compatibility (at any moment) `of assignments or function arguments, which can lead to runtime errors if not handled carefully.

```
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}
```

## Generics VS directly specifying a type:

- Flexibility: Generics allow your code to be more flexible by working with different types. By using generics, you can create functions, classes, or interfaces that can handle a wide range of types, promoting code reuse and reducing the need for redundant code.

- Type Safety: Generics ensure type safety by preserving the type information throughout your code. `When you explicitly specify a type, you lose the ability to work with different types dynamically`. Generics allow you to maintain type safety while still having the flexibility to work with various types.

- Code Reusability: Generics enable you to write reusable code that can be used with different types. By using generics, you can create functions or classes that can adapt to different data types without duplicating code for each specific type.

- Tooling Support: TypeScript's tooling and editor support work well with generics. IDEs can provide better autocompletion, type checking, and documentation assistance when working with generic code.

## Type variables

A type variable is `a placeholder for a specific type`. It allows you to write generic functions or classes that can work with different types without specifying the actual type upfront. Type variables are typically represented by a single uppercase letter, such as T or U. They can be used within angle brackets (`< >`) to define generic types.

Let's look at the example:

```
function getArray<T>(arr: T[]): T[] {
  return arr;
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Type error
```

- The function getArray is defined with a generic type variable T using the syntax <T>. This means that the function can work with any type specified when it is called.

- Next, the variable numberArray is declared and assigned the result of calling the getArray function with the type argument number. This means that numberArray is expected to be an array of numbers.

- The line numberArray.push(25); is valid because the value 25 is a number, and it matches the expected type of the array numberArray.

- However, the line numberArray.push('This is not a number'); is not valid because the argument 'This is not a number' is a string, and it does not match the expected type of the array, which is number. TypeScript raises a type error for this line because the types don't match.

## Using multiple type variables

```
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

```

## Use the methods and properties of a generic type

When using type variables to create generic components, you may only use the properties and methods of objects that are available for every type. This prevents errors from occurring when you try to perform an operation on a parameter value that is incompatible with the type that's being passed to it:

```
function identity<T, U> (value: T, message: U) : T {
    let result: T = value + value;  // Error: Operator '+' cannot be applied to types 'T' and 'T'.
    console.log(value, message);
    return result
}

let returnNS = identity<number, string>(100, "hi") //[LOG]: 100,  "hi"
console.log(returnNS) //[LOG]: 200
```

The error in your code is occurring because you are trying to concatenate two values of type T using the + operator. However, `TypeScript does not allow the + operator to be used on generic types, as the behavior of the operator is not well-defined for all possible types`.

However, it seems to work??

The identity function can accept any type that you choose to pass to the type variables. But, in this case, you should constrain the types that the value parameter can accept to a range of types that you can perform an add operation on, rather than accepting any possible type. This is called a `generic constraint`, examples:

## Generic constraints:

```
type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) : T {
    let result: T = value + value;    // Error: Operator '+' cannot be applied to types 'T' and 'T'.
    console.log(message);
    return result
}

let returnNumber = identity<number, string>(100, 'Hello!');      // OK
let returnString = identity<string, string>('100', 'Hola!');     // OK
let returnBoolean = identity<string, boolean>('Bonjour!', true); // OK
let returnBooleans = identity<boolean, string>(true, 'Bonjour!'); //Type 'boolean' does not satisfy the constraint 'ValidTypes'.

console.log(returnNumber)
console.log(returnString)
console.log(returnBoolean)
console.log(returnBooleans)
```

```
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

console.log(getPets(pets1, "fish"));  // Returns 6
console.log(getPets(pets2, 3));     // Returns "parrots"
```

## Using type guards with generics

```
type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value; // typeof returns a string!!

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello'); // [LOG]: "The message is Hello and the function returns a number value of 200"
let stringValue = identity<string, string>('100', 'Hello'); //[LOG]: "The message is Hello and the function returns a string value of 100100"

console.log(numberValue);       // [LOG]: 200
console.log(stringValue);       // [LOG]: "100100"
```

You can only use a `typeof` type guard to check the primitive types string, number, bigint, function, boolean, `symbol`, object, and undefined.

To check the type of a class, use an `instanceof`` type guard.

## Declare a generic interface

```
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}
```

## Declare a generic interface as a function type

```

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let example = processIdentity(5, "hi" )
console.log(example)

let processor1: ProcessIdentity<number, string> = processIdentity;
let instanceProcessor1 = processor1(100, 'Hello!');   // OK
let instanceProcessor11 = processor1('Hello!', 100);   // Argument of type 'string' is not assignable to parameter of type 'number'.

let processor2: ProcessIdentity<string, number> = processIdentity;
let instanceProcessor2 = processor2('Hello!', 100)
let instanceProcessor22 = processor2(true, 5) //Argument of type 'boolean' is not assignable to parameter of type 'string'.
```

"Processor1" and "processor2" are `function type variables` which have the ProcessIdentity as `variable type`

## Declare a generic interface as a class type

```
interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor = new processIdentity<number, string>(100, 'Hello');
processor.process();           // Displays 'Hello'
processor.value = 100;
console.log(processor.value) //100

let processor2 = new processIdentity<boolean, number>(true, 8);
processor2.process() //8
```

## Define a generic class (without needing an interface)

```
class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity();      // Displays 'Hello'
```

## Implement generics with custom types and classes

```
class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar); //[LOG]: "All 4 doors are closed." [LOG]: "The Electric Car is now accelerating!"
let myTruck = new Truck;
accelerate<Truck>(myTruck); // [LOG]: "All 2 doors are closed." [LOG]: "The Truck is now accelerating!"
```

## Exercise:

The DataStore class contains utility functions that can store up to ten string items in an array and return the value stored in each item. In this exercise, you will rewrite the DataStore class using a generic so it can store items of any type that you specify when it is instantiated.

```
class DataStore<T> {

    private _data = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            alert('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore();
cities.AddOrUpdate(1, "Walter")
cities.AddOrUpdate(2, 45)
cities.AddOrUpdate(13, "Chusta") // ALERT: Index is greater than 10

console.log(cities.GetData(1)) // 'Walter'
console.log(cities.GetData(2)) // 45

let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, "hi"); //Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(empIDs.GetData(0));

type Pets = {
    name: string;
    breed: string;
    age: number
}

let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3}
```
