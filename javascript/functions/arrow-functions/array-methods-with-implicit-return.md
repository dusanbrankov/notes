# Array methods with implicit return

```javascript
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

The `.filter(callback)` can be re-written as follows:

```javascript
const numbersAboveTen = numbers.filter(number => number > 10);
```

> ⚠️ A common mistake here is writing `numbers.filter(number > 10)` but this does **not** work because you need to pass the parameter first `number` and then the arrow function `=>` and then finally specify the function body which is `number > 10`.
