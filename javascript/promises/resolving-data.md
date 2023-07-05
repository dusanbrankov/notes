# Resolving data

When a promise completes successfully, you will often hear/read people say that it has **resolved**.

One of the most useful features of promises is when they resolve with some data, an answer of some computation, or some values coming from an external service/API.

---

## Example

```javascript
const temperatures = [10, 5, 3];

sumTemperatures(temperatures).then(data => {
    console.log(data); // 18 (the sum of temperatures)
});
```

The `.then()` callback receives an argument which is the result of the sum. You can call it whatever you want, and that will be the variable that you can use inside the callback.

The code above assumes the following implementation of `sumTemperatures`:

```javascript
const sumTemperatures = (temperatures, callback) => {
    // setTimeout to simulate an "delayed calculation"
    setTimeout(() => {
        const sum = temperatures.reduce((total, current) => total + current, 0);
        callback(sum); // call the success callback (with the result of the sum)
    }, 1000);
}
```

---

## Extracting value out of promise (common mistake)

It's a common mistake to try and extract the `data` or `value` (or whatever the promise is resolving) outside of the promise as follows:

```javascript
/* ❌ this does NOT work as expected */
const data = getWeatherIn("Amsterdam");

console.log(data); // Promise <pending>
```

This is **not** possible. You **have to** add a `.then()` callback and you will _only_ be able to access the `data` inside the `.then` callback. This is because the promise callback will only run in the future (once the promise has been completed).

If JavaScript were to support this syntax, then the user would not be able to interact with the browser for the entire duration that `getWeatherIn` needs to complete. If that were the case, no one would use browsers because they would be terribly slow.

There's one way to make the code above work, which is with `async/await`. However, it is very important to understand promises first because `async/await` is just syntactic sugar on top of promises.
