# Rejecting promises

The promise executor function (the function passed to the `new Promise(...)` call), in fact, receives 2 arguments. The first one we called `resolve` and we saw in the last lesson. The second one is the function that you can call to move the promise from `pending` to `rejected`. We will call this one `reject`.

Thus, here's what promises will look like:

```javascript
new Promise((resolve, reject) => {
    resolve(); // will resolve the promise (.then(callback) will be called)

    reject(); // will fail the promise (.catch(callback) will be called)
});
```

Note that the example above is not complete, you still have to decide when to call `resolve()` or when to call `reject()` (based on some condition for example).

## Rejecting with data

The `reject()` can also pass some data to the `.catch()` callback. For example:

```javascript
const alwaysFail = () => {
    return new Promise((resolve, reject) => {
        reject("Failed. That's the only thing I do.")
    });
}

alwaysFail()
  .then(() => {
    // will never be called
  })
  .catch(data => {
    console.error(data); // "Failed. That's the only thing I do."
  });
```
