"use strict";
//npm install dotenv
Object.defineProperty(exports, "__esModule", { value: true });
// npm install --save-dev @types/node @types/dotenv (npm WARN deprecated @types/dotenv@8.2.0: This is a stub types definition. dotenv provides its own type definitions, so you do not need this installed.)
var dotenv_1 = require("dotenv");
var result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
