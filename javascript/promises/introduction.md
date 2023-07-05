# Promises

A Promise is a JavaScript feature that allows us to schedule work in the future and then runs callbacks based on the outcome of the promise (whether it was successful or not).

---

Assuming a function wait with the below implementation:

```javascript
// the code below (how to create promises) will be explained at a later chapter
// we only care about consuming/using promises for now.
const wait = milliseconds => {
    // this function returns a new promise
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
```

Here's how you can use it:

```javascript
wait(1000).then(() => {
    console.log("waited 1 second");
});
```

Because the `function wait()` returns a new promise (as seen in the first code block), then we can call `.then()` on its result.

> You can **only** call `.then()` on functions that return a new Promise.

---

```javascript
const temperatures = [10, 5, 3];

sumTemperatures(temperatures).then(value => {
    console.log(value); // 18 (the sum of temperatures)
});
```

Notice how we call `sumTemperatures(temperatures)` and then we chain on it `.then(callback)`. The `value => { console.log(value); }` will run when the `sumTemperatures(temperatures)` has completed.

**Handling errors**

```javascript
sumTemperatures(temperatures)
    .then(value => {
        console.log(value); // 18 (the sum of temperatures)
    })
    .catch(reason => {
        // this callback will run when there's an error
        console.error(reason);
    });
```
