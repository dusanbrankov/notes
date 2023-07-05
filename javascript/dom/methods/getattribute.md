# Attributes

## element.getAttribute(key)

The `element.getAttribute(key)` method is used to get the value of a certain attribute by its key.

```javascript
<div id="banner">
    <button disabled="disabled" id="login">Login</button>
</div>
```

```javascript
const banner = document.querySelector("#banner");
banner.getAttribute("id"); // "banner"
banner.getAttribute("disabled"); // null (attribute not found on this element)

const button = document.querySelector("#login");
button.getAttribute("disabled"); // "disabled"
```

Note that an element is considered disabled when the `disabled` attribute is present. So, when you get back `null`, it means that the element is **not** disabled. However, when you get `""` or `"disabled"`, then it means that the element is indeed disabled.

## element.removeAttribute(key)

The `element.removeAttribute(key)` is used to remove an attribute.

```javascript
button.removeAttribute("disabled");
```

## element.setAttribute(key, value)

The `element.setAttribute(key, value)` is used to write a new attribute (or update the value of an old one that already exists).

```javascript
button.setAttribute("disabled", "disabled");
```

The 2nd argument for `setAttribute()` is _always_ required.

Another example:

```javascript
img.setAttribute("src", url); // OR img.src = url;
```

## element.hasAttribute(key)

The `element.hasAttribute(key)` method is used to check whether an attribute exists or not. The function always returns a boolean.

```javascript
button.hasAttribute("disabled"); // true or false
```
