// Syntax
find(callbackFn)
find(callbackFn, thisArg)

// Example
let names = ["Sam", "Alex", "Charlie"];

let result = names.find(function(name) {
    return name === "Alex";
});

console.log(result); // "Alex"

// When you call the `.find(callback)` method on an array, you will get back THE FIRST ITEM that matches the condition that you specify. If no items were found, you will get back `undefined`.

// [!] `.find(callback)` can return undefined. You may have to wrap its result in an if condition to avoid unexpected errors if you end up calling a method on its result.
