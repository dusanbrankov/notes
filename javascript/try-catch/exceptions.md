# Exceptions

We learned in a previous chapter about `try...catch`. However, back then, we didn't know as much as we currently do. So, it was almost not possible to give a useful example.

So, in this chapter, we'll revisit the concept of `try...catch` as well as throwing exceptions. This will be good preparation for `async/await` in the next chapters as we'll need to use `try...catch` to handle errors.

## Throw exceptions

It's also possible for you to throw an exception manually. For example, let's say you're writing a `sayHello` function that takes a `name` parameter. And, you do not want to allow other developers on this project (including yourself) to ever call this function without a `name` parameter.

Here's how you can do that:

```javascript
const sayHello = name => {
    if (!name) {
        throw new Error("name must be provided");
    }
    console.log(`Hello ${name}`);
}

sayHello("Sam"); // Hello Sam
```

Now, if you try to call `sayHello()` or `sayHello("")`, the code inside the `if` condition will execute and you will throw an error.

You will see the following in the console:

`Uncaught Error: name must be provided`

Also, the code will stop executing. So, the `console.log` will never execute.

## Recover from exceptions

It's also possible for you to recover from potential exceptions by wrapping the code with `try...catch`. Here's an example assuming the `sayHello` function that we defined above:

```javascript
console.log("Code before");
try {
    sayHello();
} catch (error) {
    console.error("Wrong usage for sayHello")
}
console.log("Code After");
```

The output of this code is:

```
Code before
Wrong usage for sayHello
Code after
```

The benefit here is that our code won't stop running because of the `throw new Error`. This is because we _catch_ the error with the `try...catch` statement.

## Example

```javascript
const canVote = age => {
    if (!age) {
        throw new Error("age is required");
    }
    return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(20)); // true
console.log(canVote(14)); // false
try {
    canVote();
} catch (error) {
    console.error(error); // Error: "age is required"
}
```

Output:

```
true
false
Error: age is required
```

### Silence error

It's also possible to use `try...catch` to silence potential errors in your code. This can be useful for secondary features while a user is performing an important task.

For example, if we're sending the payment details of the user to the payment API and we're performing some animations or analytics work in the background, these secondary tasks can be wrapped in a `try...catch` as to not interrupt the payment flow in case they ever break.

For that, you can wrap the piece of code with a try/catch block.

(While this challenge can be solved with optional chaining, we recommend that you give the `try...catch` a go.)

```javascript
const button = document.querySelector("#remove-title");
button.addEventListener("click", () => {
    try {
        document.querySelector("h1").remove();
    } catch (error) {
        console.error(error)
    }
});
```

**Important note:** we recommend that you never fully silence errors. If you're not doing anything in the `catch` block, you should at least have a `console.error(error)`. Otherwise, your code might break in a different way in the future and you will never know about it!
