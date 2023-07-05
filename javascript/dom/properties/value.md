# Value

When you're building forms with textboxes, you will often need to read what the user has written inside of each one of these textboxes. For example, say you ask the user for their email and you want to double-check that they've given you a valid email, or that they have at least written something in that field.

```html
<form>
    <input type="email" id="email" placeholder="Enter your email">
    <input type="submit" value="Register">
</form>
```

You can't use the `textContent` or `innerHTML` properties because the `<input>` element does not have a closing tag. It's a self-closing tag.

## value property

To read the written content of an input element, you have to use `value` property:

```html
<form>
    <input type="email" id="email" placeholder="Enter your email">
    <input type="submit" value="Register">
</form>
```

```javascript
const email = document.querySelector("#email");
console.log(email.textContent); // undefined ❌ (there's no closing tag)
console.log(email.value); // text written in the email field
```

So, if the user writes `test@example.com` and then, you run the code email.value, you will get the string "`test@example.com`".

## Textareas

The `<textarea>` element is an exception. It is not a self-closing tag but you have to use `value` instead of textContent.

So, as a rule of thumb, whenever you'd like to read the value written inside of an `<input>`, a `<select>`, or a `<textarea>` you have to access the value property.
