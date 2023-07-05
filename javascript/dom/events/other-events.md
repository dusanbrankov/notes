# Other events

# focus/blur

The `focus` and `blur` events are often used in form validation. They let you know when a user focuses (put the cursor inside of it) on a textbox and when they remove the focus (`blur`).

The word `focus` means that the element is selected to receive user input from the keyboard. If you write something on your keyboard, it will be written inside the element that is focused.

When you remove the focus, then this will dispatch a `blur` event.

You can listen to both of these events on text boxes. Let's see an example:

```html
<input type="text" id="name" placeholder="Enter your name">
```

```javascript
const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log("user focused inside the name");
});

name.addEventListener("blur", () => {
    console.log("user removed focus from the name");
});
```

## change

The `change` event is often used on the `<select>` element. It lets you know when the user has selected a new choice.

```html
<select id="countries">
    <option value="">Select a country</option>
    <option value="NL">Netherlands</option>
    <option value="BR">Brazil</option>
</select>
```

```javascript
const countries = document.querySelector("#countries");

countries.addEventListener("change", () => {
    console.log(countries.value);
});
```

The `change` event will only trigger when the user chooses a new value. So, since by default we see `Select a country`, the event will only trigger once the user chooses a new entry (for example `Netherlands` or `Brazil`).

Once they've chosen `Netherlands`, the event will only trigger again once they've chosen a new value such as `Select a country` or `Brazil`.

## keydown/keyup

The `keydown` and `keyup` events are used to know when the user has typed a character on the keyboard. These can be used to implement keyboard shortcuts.

The only difference between `keydown` and `keyup` is that `keydown` triggers while the user starts pressing the button and before the character is being typed. On the other hand, keyup fires after the character has been typed.

For most scenarios, you end up needing `keyup`. These events can be either added to the document (to know when a user has pressed a key anywhere on the page) or inside a textbox.

```javascript
document.addEventListener("keydown", event => {
    console.log(event.key);
});

document.addEventListener("keyup", event => {
    console.log(event.key);
});
```

Notice that we can know which character was pressed by reading the `event.key`.
