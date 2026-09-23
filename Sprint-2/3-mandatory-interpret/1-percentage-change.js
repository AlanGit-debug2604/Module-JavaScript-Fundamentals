let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are five function calls in this code in lines 4, 5, and 10
// These function calls are Number, replaceAll, and console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is from line 5:
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// There should be a comma to separate arguments 

// c) Identify all the lines that are variable reassignment statements
//  Variable reassignment statements on lines 4 and 5.
//  Variables carPrice and priceAfterOnYear are originally declared on lines 1 and 2, and reassigned on lines 4 and 5.

// d) Identify all the lines that are variable declarations
// They are lines 1,2,7 and 8.
// On lines 1 and 2, variables carPrice and priceAfterOneYear are declared by let.
// On lines 7 and 8, variables priceDifference and percentageChange are declared by const.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// To remove comma as a punctuation and space such that the  string is ready turn into a number by method Number.