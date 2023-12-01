//npm install dotenv

// npm install --save-dev @types/node @types/dotenv (npm WARN deprecated @types/dotenv@8.2.0: This is a stub types definition. dotenv provides its own type definitions, so you do not need this installed.)

import dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
