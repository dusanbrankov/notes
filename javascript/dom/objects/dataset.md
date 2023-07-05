# Dataset

There are multiple ways to build web applications. One of those ways is when your app is completely powered by a backend such as Laravel (PHP), Symfony (PHP), Rails (Ruby), Django (Python), Express.js (NodeJS), etc...

In those scenarios, you may need to pass some data from the server into your JavaScript code.

This can be done by writing `data-` attributes to an HTML element.

```html
<form id="payment-form" data-currency="EUR">
    ...
</form>
```

To read this data attribute, you can access the `dataset` object on the element:

```javascript
const form = document.querySelector("#payment-form");
console.log(form.dataset); // {currency: "EUR"}
const currency = form.dataset.currency; // "EUR"
```

Notice how the `data-` attributes are automatically collected in the `dataset` object that you can access.

Let's take a more advanced example:

```javascript
<form id="payment-form" data-currency="EUR" data-user-id="2">
    ...
</form>
```

If we log the `dataset` object with `console.log(form.dataset)`, you will get:

```javascript
{
    userId: "2",
    currency: "EUR"
}
```


Notice that the `kebab-case` (`user-id`) was automatically converted to `camelCase` (`userId`). Also, notice that the value of data attributes is **always** a string.

## Write dataset

You can also update/set a value for a data attribute by assigning it to a new value.

Assuming the following HTML:

```html
<div id="navbar" data-user-id="42"></div>
```

```javascript
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 43;
navbar.dataset.rememberMe = false;
```

The updated DOM element will look like this:

```html
<div id="navbar" data-user-id="43" data-remember-me="false"></div>
```

Notice that the value is always a string. This may become challenging when reading boolean values. The `"false"` string is `true` (because it's a string that contains text).

So, in this scenario, you can compare the string to `"true"`. So, if the string is `"true"` it will return `true`. In all other cases, it will return `false`:

```javascript
const rememberMe = navbar.dataset.rememberMe === "true"; // false
```

This `=== "true"` will allow you to convert `"true"` and `"false"` into a boolean.
