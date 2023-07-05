# querySelector()

## What does document.querySelector() return?

`document.querySelector()` returns an **object** that represents an HTML element from the page. This object is an instance of HTMLElement. HTMLElement is the parent class that every single HTML element in your page inherits from. This means that every element on your page is an instance of a single class which is HTMLElement.

However, when `document.querySelector()` cannot find the element you're looking for, it will return **null**.

Thus, if you suspect that in some scenarios `document.querySelector()` might not find your element, you should wrap it with an `if` statement to make sure that it doesn't break when you call `.textContent` on its result. You can also use the optional chaining operator.

Example:

```html
<div>Hello World!</div>
```

```javascript
const paragraph = document.querySelector("p");

// first approach
if (paragraph) {
    console.log(paragraph.textContent);
}

// second approach
console.log(paragraph?.textContent);
```

## querySelectorAll()

```html
<p id="first">First paragraph</p>
<p id="second">Second paragraph</p>
```

```javascript
document.querySelectorAll("p"); // NodeList(2) [p#first, p#second]
```

So just like `document.querySelector`, `document.querySelectorAll` expects any CSS selector. In this example, we asked it to return all the paragraphs (all the p tags).

### NodeList

While `document.querySelector()` might return `null` (when no items are found), the `document.querySelectorAll()` will **always** return a **NodeList**. This is an important difference.

A **NodeList** is a collection of DOM elements. This means that it is a variable that contains several DOM elements.

The NodeList object is similar to an array, but it's **not an array**. We will take a look at the differences and similarities in the next few lessons.

For now, it's important to understand that `document.querySelectorAll()` will always return a NodeList, of 0 or more DOM elements.
