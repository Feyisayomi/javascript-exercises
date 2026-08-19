"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
function pricingChain(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}
pricingChain(13);
pricingChain(9);
pricingChain(5);

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.
function pricingMessage(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize >= 6) {
    return "Medium order, ready in an hour";
  }
  return "Small order, walk right in";
}
console.log(pricingMessage(14));
console.log(pricingMessage(3));
console.log(pricingMessage(10));
//the return statement is more reusable because it separates data calculation from display logic. And outputs can be passed to the other parts of the program.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
const double = function (n) {
  return n * 2;
};
console.log(double(4));
//2
const shout = (text) => text.toUpperCase();
console.log(shout("baby"));

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.
function pricingMessage(orderSize = 5) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize >= 6) {
    return "Medium order, ready in an hour";
  }
  return "Small order, walk right in";
}
console.log(pricingMessage(9));
console.log(pricingMessage());
// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.
function repeat(callback, count) {
  for (let i = 0; i < count; i++) {
    callback();
  }
}
//Arrow function

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }
repeat(() => {
  console.log("Welcome to Maison Sarah!");
}, 3);
// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); //welcome to the Corner Bakery, Anna
console.log(shopName); //Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // visible in here
}
//console.log(insideIf); // undefined because it is outside the scope of the if statement

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.
function convertCelsius(celsius) {
  return (celsius * 9) / 5 + 32;
}
function convertFahrenheit(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log("Celsius to Fahrenheit");
console.log(`${0}°C = ${convertCelsius(0).toFixed(1)}°F`);
console.log(`${20}°C = ${convertCelsius(20).toFixed(1)}°F`);
console.log(`${37}°C = ${convertCelsius(37).toFixed(1)}°F`);
console.log("");

// Fahrenheit to Celsius table
console.log("Fahrenheit to Celsius");
console.log(`${32}°F = ${convertFahrenheit(32).toFixed(1)}°C`);
console.log(`${68}°F = ${convertFahrenheit(68).toFixed(1)}°C`);
console.log(`${98.6}°F = ${convertFahrenheit(98.6).toFixed(1)}°C`);

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
const answer = 42;
try {
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`Oops, that did not work: ${error.message} `);
}
console.log("The program is still running");
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
