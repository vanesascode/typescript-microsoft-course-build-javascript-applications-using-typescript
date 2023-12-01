//MODULES:

import { returnGreeting } from "./greetings_module.js";
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module.js";

import * as allGreetingFunctions from "./greetings-utilities_module.js";

allGreetingFunctions.getLength("walter");

returnGreeting("walter");

returnGreetingLength("walter");

// to create compiled main.js, use the command: " tsc --module commonjs main.ts"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//To run the js files, without imports and exports, you would use the command: "nodemon main.js
// function returnGreeting(greeting: string) {
//   console.log(`The message from Greetings_module is ${greeting}.`);
// }

// returnGreeting("walter");
