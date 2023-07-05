# Forms

The reason why we need forms is to be able to group several inputs together based on their action.

The email & password together are responsible for the login. Whereas the first name, last name, password, birthday & gender are responsible for creating an account.

## How do you submit a form?

You can send the data in a form by either clicking on the button or by pressing the `Enter` key on the keyboard while having the focus inside one of the textboxes.

This is what we call the **submit** event.

This behavior offers a good user experience because tech-savvy users as well as users who rely on accessibility software are used to navigating your website using the keyboard. So they can write their email and password and then hit Enter.

While other users can use the mouse to click on the Sign Up button to submit their data.

Both of these actions will trigger the `submit` event on the form which you can listen to.

## Requirements for the "submit" event

You'll most likely never have to think about it, but here are the requirements for the **submit** behavior (and event):

* have a form element
* have at least 1 input or textarea inside of the form
* have a button with type="submit"

The button could either be an `<input type="submit" value="..."> or a <button type="submit">...</button>`.

So here's an example of a form that triggers the submit event:

```javascript
<form id="address-form">
    <input type="text" placeholder="Enter your address">
    <input type="submit" value="Save">
</form>
```

## Listening for the submit event

Listening for the submit event is similar to listening to the `click` event, except that the submit event fires only on the `<form>` element.

So using the HTML code above, here's how you'd listen to the submit event:

```javascript
const form = document.querySelector("#address-form");

form.addEventListener("submit", event => {
    // event callback (when the form is submitted)
});
```

So, it's exactly like what you've learned in the previous chapter, the only 3 things to note are:

* the `addEventListener` has to be on the `<form>`
* the event type is `submit` instead of `click`
* we will use the `event` details so make sure to pass it as the first parameter of the callback

## Prevent default

When you submit a form, the browser will take all the values your user has written and send them to the backend of your website. However, this causes the whole page to be reloaded. That's because the browser will send the data to the same URL by default unless you specify the `form`'s `action` attribute.

Let's take an example:

If you have the `index.html` open and you fill in your email & password and click submit, the browser will send your email and password to the `index.html` page which will make the page refresh/reload.

This is the default behavior for forms. The reason behind it is rather historical. Before the fetch API (and its recent predecessor) made it to browsers, this was the only way of submitting data from the frontend to the backend.

However, nowadays we've got the `fetch` API, and thus we don't want to reload the page every time the user sends some information.

That's why we have to prevent the default behavior of the submit event by calling the `preventDefault` method on the event details:

```javascript
form.addEventListener("submit", event => {
    event.preventDefault();
    // the form will not reload anymore
});
```

As long as you add a submit event listener to a form, then you will need to prevent the default, or else your code will not run as the page will reload.
