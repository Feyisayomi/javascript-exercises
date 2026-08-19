"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false refuse to coerce
console.log(3 == "3"); // True , because of type coercion
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("5" + 1); // 51
console.log(1 + true); // 2
console.log(10 >= 10); // prediction:True
console.log(!(5 > 2)); // prediction:false
console.log(4 !== "4"); // prediction:false
console.log("b" > "a"); // prediction: false
console.log(0 === -0); // prediction: false

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.
// Initialize prompt-sync
const prompt = require("prompt-sync")();
let userInput = prompt("Enter a number:");
let orderValue = Number(userInput);
if (orderValue > 10) {
  console.log("Large order, send an email");
} else {
  console.log("Small order, walk right in");
}
// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.
let userOrderInput = prompt("How many Items do you want to order? "); //This question is important for customers to enter the amount of items they want to order, it is also the value needed for the if-else statement to run.
let orderItem = Number(userOrderInput);
if (orderItem > 12) {
  console.log(
    "Thank you for your patronage: You have a 20% discount reward on your next Order",
  );
} else if (orderItem >= 6) {
  console.log(
    "Thank you for your patronage: You have a 10% discount reward on your next Order",
  );
} else {
  console.log("Thank you for your patronage.");
}

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];
/* false = falsy
0 = falsy
"0" = truthy
"" = falsy
" " = truthy
"bread" = truthy
null = falsy
undefined = falsy
*/

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
let day = prompt("Enter the day");
switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
if (shopStatus === "open") {
  //The conditional statement became effective with the comparison operator
  console.log("Welcome in");
}
const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break; //a break was missing here
  case "M":
    console.log("Medium");
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.
//Leap year checker, we use function
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
leapYear(2024);
leapYear(1900);
leapYear(2000);
//FizzBuzz
function fizzBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    console.log("FizzBuzz");
  } else if (value % 3 === 0) {
    console.log("Fizz");
  } else if (value % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${value} is not divisible by 3 or 5 `);
  }
}
fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(25);
fizzBuzz(26);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
