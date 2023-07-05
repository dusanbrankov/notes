# Implicit return

When you forget to write `return` in a function in JavaScript, you get an implicit `return undefined`. The word implicit here means that it is inferred but not specifically expressed. Meaning that there was **no** `return undefined` but we end up getting `undefined` as a result.

## Example

```javascript
const sum = (a, b) => {
    a + b;
}

sum(1, 3); // undefined
```

As you can see, `sum(1, 3)` returns `undefined` because we did not have a `return` keyword inside the function body.

However, with arrow functions, you can implicitly return the result of the function on some very specific conditions.

```javascript
// this works 👍 (implicit return)
const sum = (a, b) => a + b;

sum(1, 3); // 4
```

**For the implicit return to work, you must have all the following conditions:**

1. Your function must be an arrow function.
2. The function body must be only **one statement**. This means you must remove the curly braces.
3. You must remove the `return` keyword because the function body is one statement.

> ⚠️ Only use implicit return when the function body is one line and short. Never sacrifice code readability and clarity in order to use a certain feature.

## Another example

**From**

```javascript
const isLegal = (age) => {
    return age >= 18;
}
```

**To**

```javascript
const isLegal = age => age >= 18;
```
