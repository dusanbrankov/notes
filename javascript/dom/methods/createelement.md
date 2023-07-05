# Creating elements imperatively

You've seen that you can append an HTML string and the browser will create the DOM element(s) for it. There is another way that is more imperative. Meaning that instead of providing an HTML string, you can build the element step by step.

For example, instead of writing the htmlString `<p class="text-center">Hello World</p>`, you can construct it with the `document.createElement()` method:

```javascript
const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World";
console.log(paragraph); // <p class="text-center">Hello World</p> (as an element not as a string)
```

You can then use the `element.appendChild()` method to append it somewhere in the DOM. For example:

```javascript
document.body.appendChild(paragraph);
```

This seems like it's a more complicated approach than using `element.insertAdjacentHTML()`. And, in a way, it is.

## So, what's the point?

There's no difference in terms of performance for the use case of a web developer (and even if there is, it's negligible). However, knowing this syntax is important as it's often used when dynamically injecting a script or a stylesheet.

Also, this syntax is helpful if you need to imperatively build it while taking into consideration some condition. For example:

```javascript
const div = document.createElement("div");

// assuming a function isDarkMode()
if (isDarkMode()) {
    div.classList.add("dark-mode");
} else {
    div.classList.add("light-mode");
}

div.textContent = "Hello World";
document.body.appendChild(div);
```
