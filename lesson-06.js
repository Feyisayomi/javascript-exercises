"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
let menuItem = [
  "Croissant",
  "Meatpie",
  "Sourdough Bread",
  "Doughnut",
  "Danish cookies",
];
console.log(menuItem); //log the whole menu items
console.log(menuItem[0]); //first item on the menu
console.log(menuItem[menuItem.length - 1]); // last item read through `length` minus 1
console.log(menuItem.length); //array's length

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
menuItem.push("Chocolate cake");
console.log(menuItem);
menuItem.unshift("Meatpie");
console.log(menuItem);
menuItem.pop();
console.log(menuItem);
menuItem.shift();
console.log(menuItem);
// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
//for loop, use when we need index or position of numbers
for (let i = 0; i < menuItem; i++) {
  console.log(menuItem[i]);
}
//for ...of loop. Use when we want to read every item without needing their position
for (const item of menuItem) {
  console.log(item);
}

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];
//map builds new array
const displayPrices = prices.map((price) => `€${price.toFixed(1)}`);
console.log(displayPrices);
//filter to retrieve prices below 5
const filterPrices = prices.filter((price) => price < 5);
console.log(filterPrices);
//find to retrieve prices above 10
const highPrices = prices.find((price) => price > 10);
console.log(highPrices);
//forEach will return undefined. It is not used for creating and returning a new array. This is the well-known trap:
// replacing map/filter with forEach when you expect a result gives you undefined.
// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
  "Tyler Jones",
];
for (const artist of artists) {
  console.log(`=== ${artist} ===`);
  console.log(`Listen to ${artist} now on every platform`);
}
//with the for of loop, there is no need for increments or specifying the array length.
// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
let newMenu = menuItem;
newMenu.push("Banana cake");
console.log(menuItem);
console.log(newMenu);
const copiedItem = [...menuItem];
copiedItem.push("Brioche bread");
console.log(copiedItem.length);
console.log(menuItem.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];
// FizzBuzz function
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }

  return number;
}

// applying FizzBuzz for numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

// Sum and largest value

let sum = 0;
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];

  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(`Sum: ${sum}`);
console.log(`Largest: ${largest}`);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
//Reverse a string with a loop that walks it backwards by index.
function reverseString(str) {
  let reversed = "";
  // Walk backwards starting from the last index down to 0
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
//Count its vowels with a loop and `includes` against a vowels array
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // Lowercase the string to ensure case-insensitive matching
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }
  return count;
}
//Stretch: Use the reverser to build a palindrome check
function isPalindrome(str) {
  // Normalize by converting to lowercase to ignore case differences
  const normalizedStr = str.toLowerCase();
  // Reuse the string reverser function
  const reversedStr = reverseString(normalizedStr);
  // Compare the normalized original to the reversed version
  return normalizedStr === reversedStr;
}
console.log(reverseString("Javascript"));
console.log(countVowels("Javascript"));
console.log(isPalindrome("Javascript"));
console.log(isPalindrome("Kayak"));
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
