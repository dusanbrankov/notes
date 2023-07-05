# Array to String

Let's say you have an array of users, and you'd like to get the name of each user separated by a comma. Like a CSV (Comma Separated Values) export.

First, you start with a `.map()` call to extract the name from the users array , and then you use `.join()` to join the array elements into one string.

```javascript
const users = [{
    id: 1,
    name: "Sam Doe"
}, {
    id: 2,
    name: "Alex Blue"
}];

const userNamesArray = users.map(user => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

**You can also chain these 2 commands and write it on one line:**

```javascript
const csv = users.map(user => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

## Applying it to HTML

The above trick is often used to generate an HTML string from an array. Let's say we'd like to return an unordered list (a `ul` with `li` items) from the `users` array above. Instead of writing it with `.forEach`, you can use the above trick as follows:

```javascript
const html = `<ul>
    ${users.map(user => `<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html); // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>
```
