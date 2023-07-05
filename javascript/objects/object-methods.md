# Object methods

---

**Table of Contents**

1. **Introduction**
2. **Object.keys()**
3. **Object.values()**
4. **Object.entries()**

---

## Introduction

Let's take a look at what happens when you access a property that does not exist on an object.

```javascript
const person = {
    id: 1,
    firstName: "Sam"
};

person.firstname; // undefined (firstname instead of firstName)
person.age; // undefined
```

Notice how when we access a property that does not exist (such as `age` or the misspelled `firstname`), then we get `undefined`.

This is not an error but this may often lead to an error if you try to access another property or method on it. For example:

```javascript
person.age.toUpperCase(); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
```
This is one of the **most common errors** that you will see in JavaScript.

It's important to be able to read this error message and understand that the issue is not `.toUpperCase()` but instead, the expression that came before it `person.age`.

That's because you end up calling `undefined.toUpperCase()` which does not exist.

### [object Object]

Another note worth mentioning is that when you see `[object Object]` it means that the `.toString()` method has been automatically called on an object which will result in `[object Object]`.

So if you see `[object Object]`, it means you tried to use an object in a context that expects a string. For example:

```javascript
const person = {
    id: 1,
    firstName: "Sam"
};

console.log(`Hello ${person}`); // "Hello [object Object]"
```
In this case, we should probably replace `${person}` with `${person.firstName}`.

---

## Object.keys()

The `Object.keys(obj)` method returns an **array** of all the keys in the `obj` that you provide. Note that we have `Object` here, which is a global variable available in JavaScript. It is similar to `Number` on which we called `Number.parseInt()` before.

The `Object` global variable contains methods that are relevant to objects. One of them is the `keys()` which accepts any object. For example:

```javascript
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const keys = Object.keys(user);
console.log(keys); // ["id", "name", "age"]
```
Notice how it returns an **array** containing every single key from the `user` object.

Remember to pass the object whose keys you want into the `.keys()` method. It's often confusing for developers to see this `Object` (with a capital `O` in the beginning). You can remember it as if the name of the function is `Object.keys()` and then it receives whatever object you want as a parameter.

---

Since `Object.keys()` returns an array, you can use it to loop through every key in the object and get its value dynamically:

```javascript
const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach(key => {
    // log the value of every key dynamically
    console.log(settings[key]);
});
```

The `console.log(settings[key])` will log the value of every key. So you will see the following in the console:

```javascript
"Dark"
"2.4.1"
false
```

---

## Object.values()

In the previous lesson, we saw that we can access the values of an object by looping through the keys and then dynamically accessing the keys. This works if you need to access both the keys and the values.

However, if you only need to access the values, then you can use `Object.values()` which returns an array of the values:

```javascript
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const values = Object.values(user);
console.log(values); // [1, "Sam Green", 20]
```

---

## Object.entries()

The `Object.entries()` method returns an array of arrays representing every key/value pair.

```javascript
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const entries = Object.entries(user);
```

The entries variable will return the following array of arrays:

```javascript
[
    ["id", 1],
    ["name", "Sam Green"],
    ["age", 20]
]
```
This is especially useful in combination with array destructuring and `for..in`.
