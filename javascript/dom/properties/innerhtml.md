# InnerHTML

```html
<div id="test">This is a <strong>sample text</strong></div>
```

```javascript
const element = document.querySelector("#test");
console.log(element.textContent); // "This is a sample text"
console.log(element.innerHTML); // "This is a <strong>sample text</strong>"
```

This is where you can see the difference between them:

- `textContent` will return the text, with all the HTML tags stripped out.
- `innerHTML` will return the HTML string inside of the element (it will not strip out HTML tags).

So, when you need to keep the HTML tags, you should use `innerHTML`. Otherwise, `textContent` is the way to go.

## Changing the text

You can change the value of the `textContent` property which will change the content inside that div. For example:

```html
<div id="test">This is a <strong>sample text</strong></div>
```

```javascript
const element = document.querySelector("#test");
element.textContent = "This is the new text!";
```

And this will update the text inside the div. So, the new HTML will be: `<div id="test">This is the new text!</div>`.

If you try to write HTML tags inside that string, they will not render as HTML, but rather as text:

```javascript
element.textContent = "<strong>This will NOT be bold</strong>";
```

What you will see on the screen will be: `<strong>This will NOT be bold</strong>` rather than the text in bold. This is often a good thing if you are writing text that may come from a user as you don't want to inject HTML that comes from a user.

The reason for that is that users can write malicious JavaScript, and, that will cause security issues on your website. When you use `textContent` however, any `<script>` tags or JavaScript will be written as text rather than interpreted by the browser. Making it a safe operation.

## Security note

If the string that you're rendering is coming from your users (for example, a string coming from a comment box that the user can fill), then you should avoid using `innerHTML` as your users will be able to write HTML & JavaScript code inside of your page which may lead to security issues. This is called Cross-Site Scripting (XSS) attack.

> **Never** use `innerHTML` with input coming from the user.
