# element.classList

Every HTML element has a `classList` object. This `classList` object allows you to call methods such as `add`, `remove`, and other methods that we'll learn about in the next lesson.

Check if `element` has `className`:

```javascript
element.classList.contains(className)
```

Toggle `className`:

```javascript
element.classList.toggle(className)
```

Replace `class1` with `class2`:

```javascript
element.classList.replace("hidden", "show");
```

Add (or remove) multiple classes:

```javascript
element.classList.add("active", "highlighted", "dark");
```
