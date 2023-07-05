# Add Event Listener

One of the most common use cases in JavaScript is responding to a user's click on an element.

The browser allows you to run a function that you define every time the user clicks on a certain element. Let's see how it works.

Assuming the button below:

```html
<button id="app-button">Click me</button>
```

```javascript
const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    // do something when the button is clicked.
    console.log("Button clicked");
});
```

The `element.addEventListener(eventType, callback)` method allows you to wait for an event (let's say click for now) to happen on an element. Once that event occurs (the user clicks on the button), the callback function will execute.

The most common `eventType` is `"click"`. This happens when a user uses the mouse to click on the element, or their finger/pen to touch the element on a touch screen.

You can write any valid JavaScript code inside the `callback`.
