"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Sarah Bakery";
const openingHour = "10";
const closingHour = "16";
const greeting = `Welcome to ${shopName}, Our Bakery opens at ${openingHour} and closes at ${closingHour}`;
console.log(greeting);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
const cleaned = messy.trim().replace("bread", "Pastries").replace(/\s+/g, " "); //replace(/\s+/g, " ") regularexpression to remove whitespace characters globally
console.log(cleaned);

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.
// The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
console.log(product.slice(0, 9));
console.log(product.slice(9, 14));

const flavorList = "rye,spelt,wheat,olive";
//.length returns the length of the string
console.log(product.length);
//27
console.log(flavorList.length);
//21
//slice returns selected element. in order to do this, we need to use split first to convert product into an array
const loafArray = product.split(", ");
//using .slice to return a subset of the array
console.log(loafArray.slice(0, 1));
//[ 'Sourdough Loaf' ]
//get the second slice
console.log(loafArray.slice(1, 2));
const flavours = flavorList.split(",");
console.log(flavours);
console.log(flavours.slice(0, 3));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
//Total Price=Net Price×(1+Tax Rate)
let totalPrice = netPrice * (1 + taxRate);
console.log(totalPrice.toFixed(2));

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const roll = Math.floor(Math.random() * 6) + 1;
console.log(roll);
const randomRange = Math.floor(Math.random() * 11) + 10;
console.log(randomRange);

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
//The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
const beginsWith = "Croissant Filler";
console.log(beginsWith.startsWith("C"));

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a"" lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
const firstName = "Sayo";
const lastName = "Adenegan";
const username = (firstName[0] + lastName).toLowerCase();
console.log(username);
//second part
const adjective = "crunchy";
const noun = "Butter croissant";
const verb = "danced";
const place = "Maison Sarah";
console.log(`A ${adjective} ${noun} ${verb} widely at the ${place} Bakery`);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
