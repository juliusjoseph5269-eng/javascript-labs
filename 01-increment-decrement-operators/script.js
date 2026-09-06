// JavaScript Increment and Decrement Operators
// This lab demonstrates the difference between prefix and postfix
// increment and decrement operators.

// Prefix increment: increases the value before assigning it.
let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

// Postfix increment: assigns the current value first,
// then increases the variable.
let score = 7;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

// Prefix decrement: decreases the value before assigning it.
let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

// Postfix decrement: assigns the current value first,
// then decreases the variable.
let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);
