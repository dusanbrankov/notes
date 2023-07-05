// The .map(callback) method allows you to transform an array into another one. Here are some common examples:

    // [4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array.

    // ["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.

// Notice that you always get back an array containing the SAME NUMBER OF ITEMS compared to the original array, but every item has most likely undergone some transformation.

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // [8, 4, 10, 16]
