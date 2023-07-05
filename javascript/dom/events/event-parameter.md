# Event details

We saw in the previous chapter how we can add an event listener to an element. For example, we can listen for a `click` event on an element.

When the user clicks that element, we can run a callback. This callback will receive from the browser one argument. We call this argument: **event details**.

The event details contains information about the event that has just occurred. For example, for a click event:

* The X (horizontal) position of the mouse when the click was triggered.
* The Y (vertical) position of the mouse when the click was triggered.
* The time when the click was triggered.
* A boolean representing whether the ctrl key was pressed when the click was triggered.
* A boolean representing whether the shift key was pressed when the click was triggered.

You will (almost) never use the information above. However, there is one property that you will use quite often. This property is called `currentTarget`.

---

How do you read the event? As mentioned above, the browser will provide you with the event details as the first argument of the callback function. Thus, you have to define that first parameter and call it whatever you want. We recommend that you call it `event`. This is a clear, descriptive and common way to refer to this event details parameter:

```javascript
button.addEventListener("click", event => {
    console.log(event); // details of the click event
});
```

## When to use the 'event' parameter?

This concept is sometimes confusing for developers. Where is the event argument coming from?

Remember that this is **always** provided by the browser. And, it's up to you to decide whether you want to read it or not.

So, when you find yourself needing to access the `event`, then you define it as a parameter. Otherwise, you can skip it.

If you're not sure, you can always pass it and then if you end up needing it, you will be able to access it. Don't worry just yet about knowing whether you're going to need it or not as we haven't explained that yet.
