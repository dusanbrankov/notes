# Object Destructuring

Just like array destructuring, you can destructure key/value pairs (or nested objects) from an object. The concept is similar, except that you have to use `{}` instead of `[]` on the left side of the `=` operator and you should have an object on the right side of the `=` operator.

Let's take a look at some examples. Assuming the following object:

```javascript
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
```

Here's how you access some of its properties and create variables out of them:

```javascript
const id = config.id;
const isAdmin = config.isAdmin;
const theme = config.theme;
```

✅️ This can be refactored with **object destructuring** as follows:

```javascript
const {id, isAdmin, theme} = config;
```

> Object destructuring is considered syntactic sugar meaning it makes reading the code easier (once you get used to it).

---

## Destructuring with default value

It's also possible to destructure with a default value, meaning that you can assign a default value to a property if it does not exist in the object you're destructuring from.

```javascript
const user = {
    id: 1,
    name: "Sam"
};

const {name, isAdmin = false} = user;
console.log(isAdmin); // false
```

As you can see, `isAdmin` defaulted to `false` because it does not exist on user.

```javascript
const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

const {name, isAdmin = false} = user;
console.log(isAdmin); // true
```

Whereas, in this example, it did not default to `false` because it exists on user so it just gets destructured.

---

## Destructure and rename

It's also possible to destructure and rename from an object. For example, let's say you already have a `name` variable so you'd like to destructure `user.name` and assign it to a variable called `userName`.

```javascript
const name = "Document title"; // name variable is already declared

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

// destructure user.name into variable userName
const {name: userName, isAdmin} = user;
console.log(userName); // "Sam"
```

Here's another example where we destructure `user.isAdmin` into a new variable `admin` (note that we destructure it and rename it):

```javascript
const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

const {id, name, isAdmin: admin} = user;
// We've renamed isAdmin to admin while destructuring
console.log(admin); // true
```

