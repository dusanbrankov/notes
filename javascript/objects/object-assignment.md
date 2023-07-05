# Object assignment

There's another feature in JavaScript that may seem counterintuitive which you must know about, and that is what happens when we assign a variable to an existing object (or array).

Let's take an example:

```javascript
const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]
```

You may be surprised why does `secondArray` also contain `10` now? Well that's because when we created `secondArray = firstArray`, we are **not** copying `firstArray`, but rather only creating a reference to it.

This means `firstArray` and `secondArray` are now referring to the same value. Technically we say they are referencing the same place in the memory.

So whenever you change the value in any of the 2 variables, then both `firstArray`, and `secondArray` will return the same value that has been updated.