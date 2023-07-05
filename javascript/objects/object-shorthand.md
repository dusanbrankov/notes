# Object shorthand

A nifty feature in Objects is the object shorthand. Say you have a variable `age`, and you wanted to create an object with a key `age` and its value is a variable `age`:

```javascript
const age = 18;
const person = {
    name: "John",
    age: age
}
```

That `age: age` is a bit redundant, thus you're able to write it as follows:

```javascript
const age = 18;
const person = {
    name: "John",
    age
}
```

Here's another example:

```javascript
const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode
};

console.log(settings); //{isAdmin: false, darkMode: true}
```

**Task:**

Complete the function `getUser` such that it returns an object containing the `id` and `name` using the object shorthand notation.

```javascript
const getUser = (id, name) => {
    return {
        id,
        name
    }
}

// Sample usage - do not modify
console.log(getUser(2, "Sam")); // {id: 2, name: "Sam"}
console.log(getUser(5, "Alex")); // {id: 5, name: "Alex"}
```

---

## Debugging tip

Object shorthand can be used as a very useful debugging tip. Let's say you've got the following code:

```javascript
const sum = (a, b) => {
    console.log(a); // 1
    console.log(b); // 3
    let total = a + b;
    console.log(total); // 4
    return total;
}

// Sample usage
sum(1, 3);
```

There are several `console.log` calls because we are trying to debug our code. However, it will be tough for us to map on the console which value corresponds to which `console.log` call.

To fix that, you can wrap every variable inside the `console.log` call with `{}` so that the code becomes as follows:

```javascript
const sum = (a, b) => {
    console.log({a}); // {a: 1}
    console.log({b}); // {b: 3}
    let total = a + b;
    console.log({total}); // {total: 4}
    return total;
}

// Sample usage
sum(1, 3);
```
