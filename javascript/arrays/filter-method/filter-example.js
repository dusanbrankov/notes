// Syntax
filter(callbackFn)
filter(callbackFn, thisArg)

// Example
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});

console.log(numbersAboveTen); // [14, 11]