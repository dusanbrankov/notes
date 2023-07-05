# Event currentTarget

When working with the event details, there's one _property_ that is very commonly used. There's also one _method_ that's commonly used and that's going to be covered in the next chapter.

The most common property is `currentTarget`.

The `event.currentTarget` refers to the element to which the event listener has been **attached**.

This will become especially useful once we start adding events to **multiple** elements.

Here's an example usage of `event.currentTarget`:

```javascript
button.addEventListener("click", event => {
    console.log(event.currentTarget); // same as the variable 'button'
});
```

The `event.currentTarget` refers to the element to which the event listener has been attached, so, in this example, it's the same as the `button` variable.

Let's say you'd like to access the text of the button, you can do that by accessing the `textContent` property on `event.currentTarget` that's because `event.currentTarget` is returning an object from the DOM like we've seen before:

```javascript
button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});
```

You can also make it clearer for yourself by defining an intermediary variable like so:

```javascript
button.addEventListener("click", event => {
    const clickedElement = event.currentTarget;
    console.log(clickedElement.textContent);
});
```

## Multiple elements

```javascript
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget); // the <button> that was clicked
    });
});
```

This is where `event.currentTarget` becomes useful as it lets us know which element was clicked. So, if we were to do `console.log(event.currentTarget.textContent)`, it would log the `textContent` of the button that was clicked.

You may notice though that we could have also used `button` instead of `event.currentTarget`. This is true in this example, but, sometimes you may not have access to the `button` variable, which is why we prefer that you always use `event.currentTarget` since it always works! We'll show you an example below of when you won't be able to access the button variable:

### When is it necessary?

When we refactor the event listener callback into a named function, it becomes absolutely necessary to use `event.currentTarget` because the `button` variable will not be defined in that function:

```javascript
const buttons = document.querySelectorAll("button");

const handleButtonClick = event => {
    console.log(event.currentTarget); // the 'button' that was clicked.
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
```

In the code above, we refactored the `event => { ... }` into its own function. We haven't really explained this syntax yet, we'll explain it in a future chapter. But, in this example, inside the `handleButtonClick`, you do **not** have access to the `button` variable. So, the only way to know which button was clicked is by accessing the `event.currentTarget`.

This is the reason why we always prefer to use `event.currentTarget`. It always works!

---

## A note on dev tools

When debugging code in a real project you will most likely add a `console.log(event)` and then try to find the value of `currentTarget` in your browser's dev tool.

This will **not** work as expected. You will see `currentTarget: null` because the `currentTarget` is only available when the event is triggered (example: when the button is clicked) but you won't be able to read its value later on in the dev tool console.

This does not affect your code, you can still use `event.currentTarget` as long as you use it inside the event callback as we've seen.

You can either log `event.currentTarget` directly (rather than `event`) or, you can add a `debugger;` statement which will pause the execution of your code and thus allowing you to see the `event.currentTarget` in the dev tools console:

```javascript
button.addEventListener("click", event => {
    console.log(event);
    debugger; // pause execution so that we can see event.currentTarget in the dev tools
});
```
