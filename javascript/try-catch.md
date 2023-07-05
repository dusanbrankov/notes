# Try...catch

## Example

Let's assume that we try to call a function that does not exist:

```javascript
console.log("Step 1");
nonExistentFunction(); // ❌ Uncaught ReferenceError: nonExistentFunction is not defined
console.log("Step 2");
```

The code will log `"Step 1"` to the console, and then will fail with a Reference Error because the `nonExistentFunction` does not exist.

Notice that `"Step 2"` never gets logged to the console because there was an error and so the code stops executing.

## try...catch

Since we know that the `nonExistentFunction` might fail, we're going to wrap it with a `try...catch` block which will allow us to recover from the error without stopping the execution of our code:

```javascript
console.log("Step 1");
try {
    nonExistentFunction();
} catch (error) {
    console.error(error); // Uncaught ReferenceError: nonExistentFunction is not defined
}
console.log("Step 2");
```

The code above will log the following to the console:

```javascript
"Step 1"
Uncaught ReferenceError: nonExistentFunction is not defined
"Step 2"
```

The major difference here is that the code continued execution because we wrapped the code that might fail with a `try...catch` so that we're able to recover from it.

### What to do in the catch block?

You can do whatever you want in the `catch` block. This ultimately depends on what you were trying to do in the `try` block. If you were trying to get the weather from an API, then you should show a message to the user that you couldn't get the weather and that they should try again.