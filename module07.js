"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings_module_js_1 = require("./greetings_module.js");
var greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
var allGreetingFunctions = require("./greetings-utilities_module.js");
allGreetingFunctions.getLength("walter");
(0, greetings_module_js_1.returnGreeting)("walter");
(0, greetings_utilities_module_js_1.returnGreeting)("walter");
//nodemon main.js
// function returnGreeting(greeting: string) {
//   console.log(`The message from Greetings_module is ${greeting}.`);
// }
// returnGreeting("walter");
