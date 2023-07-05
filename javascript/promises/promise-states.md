# Promise states

A promise can have 3 states:

- pending
- fulfilled
- rejected

When you create a promise, it will start in the `pending` state. When it has been completed successfully, then it becomes in the `fulfilled` state (you will often hear people say that it has _resolved_).

So, when the promise becomes `fulfilled`, the callback passed to `.then(callback)` will execute.

---

## Visualizing the pending state

Assuming a function `wait(milliseconds)` that returns a promise. Let's try to `console.log()` the result of `wait(1000)`:

```javascript
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

console.log(wait(1000)); // Promise {<pending>}
```

The promise shows `pending` which is the state of the promise when it's created. This would also be the case if you save `wait(1000)` in a variable and `console.log` that variable:

```javascript
const result = wait(1000);
console.log(result); // Promise {<pending>}
```

Now, if you wait 1000 milliseconds (or more) and then try to log `console.log(result)`, you will get `Promise {<fulfilled>: undefined}`. We'll talk about the undefined here in the next lesson. Notice how the promise now has a status of `fulfilled`. This means that it has been completed successfully.

---

Let's take a look at another example:

```javascript
const result = wait(1000);
console.log(result); // Promise {<pending>}
result.then(() => {
    console.log(result); // Promise {<fulfilled: undefined}
});
console.log(result); // Promise {<pending>} (because your code runs top to bottom. However, the promise callback gets scheduled into the future)
```

Notice how the `result` starts as `pending` and then becomes `fulfilled` inside the `.then()` callback.

This is what promises are all about. They let you run a callback sometime in the future when the promise has been completed successfully.

You may have also noticed that the last line `console.log(result)` shows `pending`, that's because your code is running top to bottom. At the time that this line runs, the promise has not completed yet.
