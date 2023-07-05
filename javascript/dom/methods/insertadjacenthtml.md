# Insert adjacent HTML I

There are a lot of scenarios where you need to add some HTML to an existing one. Using `innerHTML` is not efficient because the browser has to reconstruct the entire content of the element. For example, the code below:

```html
<div id="container">
    <p>Hello World</p>
</div>
```

```javascript
const div = document.querySelector("#container");

div.innerHTML += `<p>Another paragraph</p>`;
```

The `div.innerHTML += ...` (which is similar to `div.innerHTML = div.innerHTML + ...`) will recreate all the previous content alongside the new one (so, the previous paragraph will be removed then recreated alongside the new one).

This is not very efficient and could create some issues if you had event listeners (this will be explained in the events chapter).

Instead, we need a method that allows us to add some HTML to the end or the beginning of the element. We call this _append_ or _prepend_.

## element.insertAdjacentHTML(position, htmlString)

The `element.insertAdjacentHTML` will place the `htmlString` without having to reconstruct the remaining HTML inside the `element`. It could either `prepend` or `append` depending on the `position` that you provide.

Assuming the following HTML code:

```html
<div id="job-positions">
    <div class="position">2009-2013</div>
    <div class="position">2013-2015</div>
</div>
```

---

**Append:** This will add the html string at the end of the `#job-positions` element.

```javascript
const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML("beforeend", `<div class="position">2015-2020</div>`);
```

**Prepend:** This will add the html string at the beginning of the `#job-positions` element.

```javascript
const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML("afterbegin", `<div class="position">2007-2009</div>`);
```

## Array to DOM

It's very common to have an array of items that you'd like to insert into the DOM. For that, you can use a combination of `forEach` on the array and `insertAdjacentHTML`:

```html
<ul id="apps-list"></ul>
```

```javascript
const apps = ["Calculator", "Phone", "Messages"];
const list = document.querySelector("#apps-list");

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});
```

The resulting DOM will be:

```html
<ul id="apps-list">
    <li>Calculator</li>
    <li>Phone</li>
    <li>Messages</li>
</ul>
```

## insertAdjacentHTML's security risk

The `insertAdjacentHTML` method presents the same security risk as `innerHTML`.

So, you should **not use** it if the variables you're interpolating might be coming from the user.

Similarly, we've got the [insertAdjacentText](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText) method that will insert text without interpreting HTML.
