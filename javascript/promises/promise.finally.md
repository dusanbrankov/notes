# Promise.finally

## .then()/.catch() replaces try...catch

Before we learn about `Promise.finally`, let's talk about `try...catch` with promises.

The `try...catch` statement does **not** work with promises. That's because the promises are asynchronous meaning that they are happening at a later stage.

So, if a promise fails, this is going to be sometime in the future. And, by that time, the `try...catch` statement has already been completed a long time ago.

Also, you don't need `try...catch` because promises have `.then()` and `.catch()` that act similarly to the `try...catch` statement.

---

## Promise.finally

The `.finally()` callback will execute whenever the promise's state changes from `pending` to either `fulfilled` or `rejected`. This means that `.finally()` will execute for both success and error states.

Let's take an example:

```javascript
getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
        console.log("Done fetching weather");
    })
    .catch(error => {
        console.error(error);
        console.log("Done fetching weather");
    });
```

The above code logs `Done fetching weather` in both scenarios (success and error). We can refactor it to avoid duplication with `.finally()`:

```javascript
getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Done fetching weather");
    });
```

This code does exactly the same thing as the one above but is more elegant as it avoids duplication. The `.finally(callback)` will execute after the `.then()` when the promise resolves successfully and after the `.catch()` when the promise rejects.

---

## Manually rejecting a promise

It's also possible to manually reject a promise by throwing an error yourself. Here's how:

```javascript
getWeatherIn("Amsterdam")
    .then(data => {
        throw new Error("Stopped.");
        console.log(data);
        console.log("Done fetching weather");
    })
    .catch(error => {
        console.error(error);
        console.log("Done fetching weather");
    });
```

Assuming the `getWeatherIn()` fulfilled, the `.then()` callback will execute. However, the `throw new Error("Stopped.")` will immediately **reject** the promise. So, the rest of the `.then` callback is ignored, and the `.catch()` callback will execute.

We will use this pattern to handle fetch calls when the API returns an error.

---

## Useful with DOM & fetch

We will come back to the `.finally()` later in this course once we learn about fetch and the DOM. For now, assume we want to show a loader when we start getting the weather and then stop it afterward.

Assuming the functions `startLoader()` and `stopLoader()`, here's what the code would look like:

```javascript
startLoader();
getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        stopLoader();
    });
```
