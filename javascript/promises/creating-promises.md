# Creating promises

In the previous promise chapters, we used functions that return a promise. In this chapter, you'll learn how to write a function that returns a promise.

The use cases for that are a bit on the advanced side. Most of the time you will be consuming (using) functions that return a promise (like the `fetch` API that we will learn about soon). Also, you will benefit by better understanding how promises work.

Let's see how we can implement the `waitOneSecond` function that resolves successfully after 1 second. We start by defining the function:

```javascript
const waitOneSecond = () => {

}
```

Now, this function must return a new promise:

```javascript
const waitOneSecond = () => {
    return new Promise(() => {

    });
}
```

This means that the `waitOneSecond` function is doing some asynchronous work. So, its result will not be directly accessible because it has to resolve somewhere in the future. If you forget to `return new Promise(...)` then you won't be able to call` .then()` or `.catch()` on the result of `waitOneSecond()`.

Notice the syntax `new Promise()`. The `Promise` class is available in the JavaScript language and you need to create a new instance of it.

This `Promise` class receives one argument which is called the `executor (() => {})`. The executor will run immediately.

Also, this `executor` receives as the first argument a function that you can call whenever the promise has completed its work. Even though you can call this argument whatever you want, it is _very common_ to call it `resolve`. Here's what it looks like:

```javascript
const waitOneSecond = () => {
    return new Promise((resolve) => {
        // do some work
        // when it's done, call resolve()
    });
}
```

Let's say we want this function to resolve as soon as possible, then you can call the `resolve()` method directly inside of the promise executor:

```javascript
const waitOneSecond = () => {
    return new Promise((resolve) => {
        resolve();
    });
}
```

However, for our use case, we need to wait 1 second before resolving, thus the code will be:

```javascript
const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
```

When you call `resolve()`, the promise state will be changed from `pending` to `fulfilled`. This is why when you call `resolve()`, the `.then()` callback will execute.

Here's how you can use the `waitOneSecond` function:

```javascript
waitOneSecond().then(() => {
    console.log("Waited one second");
});
```
