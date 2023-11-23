"use strict";
function calculateInterestOnlyLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principle * interest;
    return "The interest only loan payment is " + payment.toFixed(2);
}
function calculateConventionalLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment =
        (loanTerms.principle * interest) /
            (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return "The conventional loan payment is " + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({
    principle: 30000,
    interestRate: 5,
});
let conventionalPayment = calculateConventionalLoanPayment({
    principle: 30000,
    interestRate: 5,
    months: 180,
});
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
