/*  Module 8: Organize code using Typescript namespaces
    Lab End */

//  Interfaces moved to module08_loans.ts

//  Functions moved to module08_loan-programs.ts

/*  TODO Add reference paths. */
/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />

/*  TODO Update the function calls. */
let interestOnlyPayment2 = LoanPrograms.calculateInterestOnlyLoanPayment({
  principle: 30000,
  interestRate: 5,
});
let conventionalLoanPayment2 = LoanPrograms.calculateConventionalLoanPayment({
  principle: 30000,
  interestRate: 5,
  months: 180,
});
console.log(interestOnlyPayment2); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment2); //* Returns "The conventional loan payment is 237.24"
