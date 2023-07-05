# Array reduce

```javascript
const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => { 
    return total + current;
}, 0);
```

There's a lot of things happening here, let's break them down:

- We call the `.reduce()` method on the `grades` array.
- We assign the result of `grades.reduce()` to a new variable called sum.
- The reduce method is taking 2 parameters: The reducer and the initial value.

The `.reduce` example can be written on one line using implicit return:

```javascript
const sum = numbers.reduce((total, current) => total + current, 0);
```

## Reducing arrays of objects

```javascript
const grades = [{grade: 10}, {grade: 15}, {grade: 5}];

const sum = grades.reduce((total, current) => {
    return total + current.grade;
}, 0);
```

**Another example**

```javascript
const getCartTotal = products => {
    return products.reduce((total, current) => {
        return total + (current.price * current.quantity)}, 0)
}

// Sample usage - do not modify
const sampleProducts = [{
    price: 10,
    quantity: 3
}, {
    price: 5,
    quantity: 4
}]

console.log(getCartTotal(sampleProducts)); // 50
```
