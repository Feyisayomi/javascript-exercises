"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const bakeryName = "Maison Sarah";
//The bakeryName is a Constant because it can not change
let orderCount = 5;
//The variable orderCount is not a constant because, each order depends on different individuals or group of people.
const phoneNumber = "+49133123456";
//phoneNumber is a constant because it is the business number for communicating with customers
let welcomeMessage =
  "Welcome to Sarah Maison, where quality meets Satisfaction";
//I used let because the content of the variable welcome message can still change.
const openingHour = "10:00";
//This is the normal opening hour and is not subject to change

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof "Maison Sarah");
console.log(typeof 5);
console.log(typeof "+49133123456");
console.log(typeof welcomeMessage);
console.log(typeof openingHour);
console.log(typeof null);
console.log(typeof undefined);
//null is a famous historical bug, although it is a primitive it returns an object data type and fixing this error will break millions of existing pages

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let a = "";
let b = null;
let c;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//The first empty string variable a returned a type string while the variable b with value null returned an object and the variable c without any value returned undefined data type.
// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";
console.log(Number(countText));
console.log(String(typeof priceText));
console.log(Number(typeof countText));
console.log(Boolean(typeof flagText));
//the conversion countText to Number produced a NaN because it is a const so it can not change.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
//const bakeryName = "Maison Sarah"; This threw an error because it was already declared as a constant in the first part: syntax error
//An error due to the fact that a constant variable was reassigned another value
let openingTime = 7;
//openingTime was initially not declared, referencError
let loafCount = 12;
console.log(loafCount);

//the loafCount variable was read before it was declared. It returned zsh:number expected
// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let d = "Croissant";
let e = "Meat Pie";
console.log(`Before swapping: d= ${d}, e = ${e}`);
//swap with a temporary variable
let k = d;
//the contents of variable a are saved in temp
d = e;
e = k;
console.log(`After swapping: d= ${d}, e = ${e}`);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
