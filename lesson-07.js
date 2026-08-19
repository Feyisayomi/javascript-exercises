"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const menuItem = {
  name: "Butter Croissant",
  price: 2.8,
  vegetarian: true,
  category: "Pastry",
};
//dot notation
console.log(menuItem.name);
console.log(menuItem.category);
//bracket notation
const menuPricing = "price";
console.log(menuItem[menuPricing]);

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
const menuItem2 = {
  name: "Butter Croissant",
  price: 2.8,
  describe: function () {
    return `${this.name} costs ${this.price} euros`;
  },
};

console.log(menuItem2.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menuItems = [
  {
    name: "Butter Croissant",
    price: 2.8,
    category: "pastry",
    vegetarian: true,
  },
  {
    name: "Meat Pie",
    price: 4.0,
    category: "pastry",
    vegetarian: false,
  },
  {
    name: "Chocolate cake",
    price: 6.0,
    category: "dessert",
    vegetarian: true,
  },
  {
    name: "Banana bread",
    price: 3.5,
    category: "Bread",
    vegetarian: true,
  },
  {
    name: "Chicken sandwich",
    price: 2.5,
    category: "pastry",
    vegetarian: false,
  },
];
//for ..of loop
for (const item of menuItems) {
  console.log(`A ${item.name} costs ${item.price.toFixed(1)}`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
const vegetarianItems = menuItems
  .filter((item) => item.vegetarian)
  .map((item) => item.name);
console.log(vegetarianItems);
//fetch first item cheaper than 3 euros
const cheaperThanthree = menuItems.find((item) => item.price < 3);
//find returns undefined when nothing matches
console.log(cheaperThanthree);

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
const firstItem = menuItems[0];
console.log(Object.keys(firstItem));
console.log(Object.values(firstItem));
for (const [key, value] of Object.entries(firstItem)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
const secondItem = firstItem;
secondItem.price = 3.2;
console.log(firstItem);
console.log(secondItem);
//both firstItem and secondItem have the same price because of the same object shared reference
//spreadcopy
const copiedItem = { ...firstItem, price: 3.5 };
console.log(firstItem); //price:3.2
console.log(copiedItem); //price:3.5

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const words = sentence.split(" ");
const counter = {};
for (const word of words) {
  if (counter[word]) {
    counter[word] += 1;
  } else {
    counter[word] = 1;
  }
}
console.log(counter);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
