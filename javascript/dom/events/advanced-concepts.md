# Advanced concepts

Now that you've learned the most common concepts surrounding DOM Events, we'd like to mention 2 more concepts:

## element.removeEventListener(eventType, callback)

Similar to how you can add an event listener, you can remove an existing event listener on an element using the `element.removeEventListener(eventType, callback)` method.

For it to work, however, you have to provide both arguments. So, the `callback` needs to be the same as the one you provided in the `addEventListener` call. This is why we'll need to define the function and give it a name, then use that function as the `callback`. Let's take a look at an example:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("button clicked");
});
```

With the code above, we _cannot_ remove the event listener because if we try and call `button.removeEventListener`, we need to provide the same callback as above. So, we'll have to write the callback as a function and give it a name instead of an anonymous function:

```javascript
const button = document.querySelector("button");

const handleClick = () => {
    console.log("button clicked");
}

button.addEventListener("click", handleClick);
```

In the code above, we extracted the callback into a named function called `handleClick`. Before we continue, note this `line button.addEventListener("click", handleClick);`. You should **not** add the `()` here because you do not want to call `handleClick` right now, but, instead, want to tell JavaScript which function you're referring to.

If you do use the `()` `(button.addEventListener("click", handleClick());// ❌`, the function handleClick will be called on page load and the event listener will not work.

We'll re-explain this concept in the Functions II chapter.

Now that we have the function name extracted, we can call `removeEventListener` whenever necessary:

```javascript
button.removeEventListener("click", handleClick);
```

Once called, the `handleClick` on _click_ event listener will be removed and the button will no longer react to that specific event.

This is generally useful for cleaning up. Let's say, you know that the user will not use the modal that they just closed, you can then free up some resources by removing all the event listeners. Unfortunately, there isn't a way to remove event listeners without specifying the `callback` function.

## Once event listener

If you need to add an event listener that only runs once, there's an easier way instead of adding an event listener and then removing it. You can add an event listener and specify `once: true` in its options.

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("button clicked");
}, {
    once: true
});
```

Notice the 3rd argument for `addEventListener` which is an object. `{once: true}` means that the event should execute only once and then it gets automatically removed.

After the user clicks on the button the first time, the event listener will be automatically removed by the browser.
