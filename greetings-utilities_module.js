"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLength = exports.returnGreeting = void 0;
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingsLength_module is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length;
}
exports.getLength = getLength;
