# Build JavaScript applications using TypeScript - MICROSOFT COURSE

## Declare and instantiate classes in TypeScript

As a JavaScript programmer, you may have experience with classes, or the pre-ECMAScript 2015 (ES6) implementation based on constructors and prototypes. `JavaScript classes in ES6 are primarily syntactical sugar` over JavaScript’s existing prototype-based inheritance.

Classes in TypeScript extend the ES6 functionality by adding `TypeScript-specific features` like type annotations for class members, access modifiers, and the ability to specify required or optional parameters. Another benefit of using TypeScript is that you can use it to develop with classes and then `compile them down to JavaScript that works across all major browsers` and platforms, as needed.

## Classes

A class `encapsulates` data for the object. Data and behavior are included in the class but the details of both can be hidden from the person who is working with the object in code. For example, if you call the turn method of a Car object, you don't need to know exactly how the steering wheel works, you just need to know that the car will turn left when you tell it to. The class serves as a black box where all the attributes and behaviors are only exposed through the properties and methods, limiting what a coder can do with it.

- `Properties`, also referred to as fields, are the data (or attributes) for the object. These are the defining characteristics of the object that you can set or return from your code.

- `The constructor` is a special function used to create and initialize objects based on the class. When you create a new instance of the class, the constructor creates a new object with the class shape and initializes it with the values passed to it.

- `Accessors` are a type of function that you use to get or set the value of properties. Properties can be read-only by simply omitting the set accessor in the class, or inaccessible by omitting the get accessor (the property will return undefined if you attempt to access it, even if it's assigned a value during initialization.)

- `Methods` are functions that define the behaviors or actions that the object can do. You can call these methods to invoke the behavior of the object. You can also define methods that are only accessible from within the class itself and are typically called by other methods in the class to perform a task.

```
class Car {

    // Properties
_make: string;
_color: string;
_doors: number;

    // Constructor
constructor(make: string, color: string, doors = 4) {
  this._make = make
  this._color = color
  if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}
    // Accessors
get make() {
    return this._make;
}
set make(make) {
    this._make = make;
}
get color() {
    return 'The color of the car is ' + this._color;
}
set color(color) {
    this._color = color;
}
get doors() {
    return this._doors;
}
set doors(doors) {
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}
    // Methods
accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
}
brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
}
turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
}
// This function performs work for the other method functions
worker(): string {
    return this._make;
}

}

let myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1)

// [LOG]: Car: {
//   "_make": "Cool Car Company",
//   "_color": "blue",
//   "_doors": 2
// }

console.log(myCar1.color); //[LOG]: "The color of the car is blue"
console.log(myCar1._color); //[LOG]: "blue"

let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

let myCar2 = new Car('Galaxy Motors', 'red', 3);
console.log(myCar2)
// [ERR]: "Executed JavaScript Failed:"
//[ERR]: Doors must be an even number

```

![image](https://github.com/vanesascode/typescript-microsoft-course-build-javascript-applications-using-typescript/assets/131259155/b0a023b4-f47e-4535-8d10-e8b37787e8b5)

## Access modifiers

All class `members are public, by default`. This means that they are accessible from outside of the containing class. You saw an example of this earlier when you returned the value of two members of the Car class: \_color (a property defined in the class) and color (a parameter defined in the constructor.)

Sometimes it is desirable to provide access to both, but you will typically want to `control access to the raw data contained in the property by only allowing access through the get or set accessor`.

You can also control access to method functions. For example, the Car class contains a function called worker that is only called from other method functions within the class. Calling this function directly from outside of the class may cause undesirable results.

![image](https://github.com/vanesascode/typescript-microsoft-course-build-javascript-applications-using-typescript/assets/131259155/7a1bf888-c0bb-463e-b5cc-dd757b41a473)

### -- PRIVATE:

```
class Car {
    // Properties
private _make: string;
private _color: string;
private _doors: number;
    // Constructor
constructor(make: string, color: string, doors = 4) {
  this._make = make
  this._color = color
  if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }

}
    // Accessors
get make() {
    return this._make;
}
set make(make) {
    this._make = make;
}
get color() {
    return 'The color of the car is ' + this._color;
}
set color(color) {
    this._color = color;
}
get doors() {
    return this._doors;
}
set doors(doors) {
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}

    // Methods
accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
}
brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
}
turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
}
// This function performs work for the other method functions
private worker(): string {
    return this._make;
}

}

let myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1)
```

![image](https://github.com/vanesascode/typescript-microsoft-course-build-javascript-applications-using-typescript/assets/131259155/6c5b764a-701a-4243-bc61-a2604ca9dfd2)

## Define static properties

The properties and methods of the classes defined so far are instance properties, meaning that they are instantiated and called on each instance of the class object. There is another type of property called a static property. `Static properties and methods are shared by all instances of a class`.

For example, you can add a new static property to the Car class called numberOfCars that stores the `number of times that the Car class is instantiated` and set its initial value to 0. Then, in the constructor, increment the count by one.

Notice that you use the syntax `className.propertyName` instead of `this`. when accessing the static property.

```
class Car {
    // Properties
private static numberOfCars: number = 0;  // New static property
private _make: string;
private _color: string;
private _doors: number;
    // Constructor
constructor(make: string, color: string, doors = 4) {
  this._make = make
  this._color = color
  if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
    Car.numberOfCars++; // Increments the value of the static property
}
    // Accessors
get make() {
    return this._make;
}
set make(make) {
    this._make = make;
}
get color() {
    return 'The color of the car is ' + this._color;
}
set color(color) {
    this._color = color;
}
get doors() {
    return this._doors;
}
set doors(doors) {
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}

    // Methods
accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
}
brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
}
turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
}
// This function performs work for the other method functions
private worker(): string {
    return this._make;
}
public static getNumberOfCars(): number {
    return Car.numberOfCars;
}

}

// Instantiate the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);

console.log(Car.getNumberOfCars()); // Returns 2
```

## Extend a class using inheritance

ElectricCar is a `subclass` that uses the extends keyword to derive from the Car `base class`. (Base classes are also called `superclasses` or `parent classes`.)

Because ElectricCar extends the functionality from Car, you can create an instance of ElectricCar that can accelerate , brake, and turn. If you needed to make changes to the code in the base class, you only need to change it in the Car class and then all subclasses of Car will inherit those changes.

1 - Declare the `property that is unique` to the ElectricCar class, \_range, as a private property of type number.

2 - The constructor: The parameter list can include any of the properties of both the base class and the subclass. (As with all parameter lists in TypeScript, remember that required parameters must appear before optional parameters.)
In the body of the constructor, you must add the `super() keyword to include the parameters from the base class`. The super keyword executes the constructor of the base class when it runs. The super keyword must appear before any references to this. when referring to properties in the subclass.

3 - Define the get and set accessors for the range parameter.

4 - In the Car class, change the access modifier of the worker function `from private to protected`. This allows subclasses of the Car class to use the function, while keeping it hidden from the members available to objects instantiated from the class.

---

### -- Override a method

When a derived class has a different definition for one of the member functions of the base class, the base function is said to be overridden. Overriding is what happens when you create a function in a subclass with the same name as the function in the base class but, it has different functionality.

For example, assume that electric cars use a different type of braking system than traditional cars called regenerative braking. So, you may want to override the brake method in the Car base class with a method that is specialized for the ElectricCar subclass.

---

5 - Define a new brake method in the ElectricCar class that has different implementation details. Note that the `parameter signature and return type for the brake method must be the same` as the brake method in the Car class.

```
class ElectricCar extends Car {
    // Properties unique to ElectricCar
private _range: number;
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
}

    // Accessors
get range() {
    return this._range;
}
set range(range) {
    this._range = range;
}
    // Methods
charge() {
    console.log(this.worker() + " is charging.")
}
brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`
}
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"

console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
```

## Declare an interface to ensure class shape

👉 The interface includes the parameters of the constructor, not the properties.

```
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}


class Car implements Vehicle {
    // Properties
private static numberOfCars: number = 0;  // New static property
private _make: string;
private _color: string;
private _doors: number;
    // Constructor
constructor(make: string, color: string, doors = 4) {
  this._make = make
  this._color = color
  if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
    Car.numberOfCars++; // Increments the value of the static property
}
    // Accessors
get make() {
    return this._make;
}
set make(make) {
    this._make = make;
}
get color() {
    return 'The color of the car is ' + this._color;
}
set color(color) {
    this._color = color;
}
get doors() {
    return this._doors;
}
set doors(doors) {
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}

    // Methods
accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
}
brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
}
turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
}
// This function performs work for the other method functions
protected worker(): string {
    return this._make;
}
public static getNumberOfCars(): number {
    return Car.numberOfCars;
}

}
```

## Interfaces or Classes, which one to use?

The key difference between interfaces and classes in any programming language is that `classes allow you to define implementation details`.

`Interfaces solely define how data is structured`.

Classes allow you to define methods, fields, and properties. Classes also provide a way to template objects, defining default values.

---

### Example Interface:

If you were creating a full-stack application with both client and server implementations, you will typically need to define how data will be structured. If the data in question was to store information about a dog, for example, you might create an interface that looks like this:

```
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

```

This interface could be used in a shared module for both your client and server code, ensuring the data structure is the same on both sides. On the client, you might have code to retrieve the dog from the server API you define, which looks like the following:

```
async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}
```

By using the interface, loadDog will let TypeScript know the structure of the object. You don't need to create a class to ensure this works.

---

### Example Class:

On the server you may want to add code to load or save a dog to the database. A common technique for managing data in a database is to use what's known as the "`active record pattern`", meaning the object itself has save, load and similar methods. We can use the Dog interface defined above to ensure we have the same properties and structure, while adding the necessary code to perform the operations.

```
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}
```

## Exercise:

```
class BuildArray {
  // TODO Define the properties
  _items: number;
  _sortOrder: "ascending" | "descending";

  // TODO Define the constructor
  constructor(items: number, sortOrder: "ascending" | "descending") {
    this._items = items;
    this._sortOrder = sortOrder;
  }

  // TODO Define the accessors

  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(sortOrder) {
    this._sortOrder = sortOrder;
  }

  // TODO Define the methods
  private sortDescending = (a: number, b: number) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  };
  private sortAscending = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  };

  public buildArray() {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this._items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === "ascending") {
      return randomNumbers.sort(this.sortAscending);
    } else {
      return randomNumbers.sort(this.sortDescending);
    }
  }
}


let testArray1 = new BuildArray(12, "ascending");
let testArray2 = new BuildArray(8, "descending");
console.log(testArray1);
console.log(testArray2);

```
