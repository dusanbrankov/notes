# NodeList

In the previous lesson, we learned that `document.querySelectorAll(cssSelector)` returns a **NodeList**. A NodeList is a collection of DOM elements.

**A NodeList is not an array.** However, there are some similarities:

- they both have a length property (you can access it with .length)
- you can access items at a specific index with the square brackets. For example, [0] and [1].
- you can iterate through both of them with .forEach().

For example:

```html
<p>First paragraph</p>
<p>Second paragraph</p>
```

```javascript
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length); // 2
console.log(paragraphs[0]); // <p>First paragraph</p>
console.log(paragraphs[1]); // <p>Second paragraph</p>

paragraphs.forEach(paragraph => {
    console.log(paragraph); // logs every paragraph element one by one
});
```

These are the only similarities. You cannot call `.filter` on a NodeList, thus this code doesn't work:

```javascript
// ❌ this does NOT work
document.querySelectorAll(".link").filter();
```

## Getting elements' text

So, how do you get every element's text? Assuming the same HTML example from before:

```javascript
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent); // logs every paragraph's text
});
```

Calling `paragraphs.textContent` will never work as there's no `textContent` property on the NodeList object. It has to be called on a single element. This is why we need to loop through the list of paragraphs one by one.

## Convert NodeList to Array

You can convert a NodeList into an array using the array spread syntax (`...`) which spreads every single item of the NodeList, into a new array.

```javascript
const divs = document.querySelectorAll("div"); // NodeList
const items = [...divs]; // Array
```

Or, in a single line:

```javascript
const items = [...document.querySelectorAll("div")]; // Array
```
