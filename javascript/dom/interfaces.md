# Interfaces

Every HTML element in your page _implements_ a certain `interface`. An interface is very similar to the concept of class, except that you can only inherit it (you're not allowed to create a new instance of it directly).

We'll see examples of these interfaces in the next lesson. For now, let's see how we can know which interface a certain element implements. Assuming the following HTML:

```html
<div>Hello World</div>
<p>Title</p>
```

We're going to select these elements and then convert them to a string with the `.toString()` method:

```javascript
const div = document.querySelector("div");
const p = document.querySelector("p");

div.toString(); // [object HTMLDivElement]
p.toString(); // [object HTMLParagraphElement]
```

Notice the `HTMLDivElement` and `HTMLParagraphElement`. These are the interfaces that these 2 elements implement respectively.

This means that the `div` gets access to all the properties and methods on `HTMLDivElement` and that the `p` gets access to all the properties and methods on `HTMLParagraphElement`.

We'd like to stress that you can be a front-end developer for _years_ without having to know about these interfaces. We're only mentioning them because they will make you better at reading documentation and because TypeScript has become more popular these days and when working with TypeScript, you will start seeing these `interfaces` in TypeScript's autocomplete.

---

Let's take a look at the interfaces implemented by the following HTML elements:

(Element, Interface)

* `<div>` HTMLDivElement
* `<body>` HTMLBodyElement
* `<p>` HTMLParagraphElement
* `<ul>` HTMLUListElement
* `<li>` HTMLLIElement
* `<a>` HTMLAnchorElement
* `<button>` HTMLButtonElement

Every one of these interfaces inherits from a base interface called `HTMLElement`.

## HTMLButtonElement and HTMLElement

Assuming a `<button>` element, we know that it implements `HTMLButtonElement` which in turn inherits from `HTMLElement`.

* [HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) on MDN
* [HTMLElement on MDN]https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

If you open these 2 links, you can see that the `HTMLButtonElement` has the following properties & methods:

**Properties**

* `accessKey`
* `autofocus`
* `disabled`
* `form`
* `formAction`
* etc.

**Methods**

* `checkValidity()`
* `reportValidity()`
* `setCustomValidity()`

These properties and methods are available **only** for elements that extend the `HTMLButtonElement`. So, you will not find them on a `<p>` element because it implements another interface which is the `HTMLParagraphElement`.

Now, in addition to this, since `HTMLButtonElement` inherits from `HTMLElement`, then all the properties and methods that you can see on `HTMLElement` (there's a lot of them!) are also present on the `<button>`.

This can also be seen on MDN in the `HTMLButtonElement` page under _properties_:

> Inherits properties from its parent, HTMLElement.

as well as under _methods_:

> Inherits methods from its parent, HTMLElement.

---

## In summary

As a reminder, you can code for years without knowing about these interfaces. However, now that you know they exist, you can better read related documentation.

When you see that the `HTMLAnchorElement` has properties such as `hash`, `host`, etc. You now know that these are unique to `<a>` elements. In addition to that, all the properties & methods on `HTMLElement` are also available on `<a>` elements because `HTMLAnchorElement` inherits from `HTMLElement`.
