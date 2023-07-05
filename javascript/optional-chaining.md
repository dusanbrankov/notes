# Optional chaining

**Table of Contents**

1. **Introduction**
2. **Optional chaining usage with arrays**
3. **Optional chaining usage with functions**
4. **No optional chaining for assignment**

---

## Introduction

We know from a previous chapter that if an object property returns `undefined`, then we should avoid accessing other properties on it (or calling methods on it) so that we don't get an error. This is why you often see code that looks like this:

```javascript
// assuming object `user`
let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
    name = user.details.name.firstName;
}
```

We can't directly write `let name = user.details.name.firstName` if we suspect that, for some reason, `user.details` might be `null` or `undefined`. And the same for `user.details.name`.

Enter optional chaining. It lets us refactor the entire code above into the following:

```javascript
// assuming object `user`
const name = user.details?.name?.firstName;
```

In case one of the properties is `null` or `undefined`, then the `?.` will short-circuit to undefined. This means that it will stop reading the property you asked it to read and will result in `undefined`.

Let's take a look at some examples and see the result of optional chaining:

```javascript
const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}

user.details?.name?.firstName; // "Sam"
user.data?.id; // undefined
user.children?.names; // undefined
user.details?.parent?.firstName; // undefined
```

---

One important note is that you cannot use optional chaining on an object that may not exist. The object has to exist. Optional chaining is only used to access a property that may or may not exist.

This means when you access `user.details?.`, you need to make sure that there is a variable (of any type) called `user`. Otherwise, you get an error.

---

## Optional chaining usage with arrays

Assuming the code below, where the key `temperatures` might be `undefined`:

```javascript
const data = {
    temperatures: [-3, 14, 4]
}

let firstValue = undefined;
if (data.temperatures) {
    firstValue = data.temperatures[0];
}
```

We can refactor it into:

```javascript
const firstValue = data.temperatures?.[0];
```

Notice how we used `?.` in front of the `[0]` to access the first item of the array. The benefit of optional chaining here is that if `data.temperatures` returned `null` or `undefined`, your code won't break. It will short-circuit and return `undefined`. Which is why we were able to get rid of the `if` condition.

---

## Optional chaining usage with functions

Similarly, we can use optional chaining to call functions by using the `?.` operator. Here's the example before optional chaining:

```javascript
const person = {
    age: 43,
    name: "Sam"
};

let upperCasedName = person.name; // might be undefined
if (person.name) {
    upperCasedName = person.name.toUpperCase();
}
```

Which we can refactor into:

```javascript
const upperCasedName = person.name?.toUpperCase();
```

If you think that assumption doesn't make sense in your case, for example, the name might exist but be a number, then you can use `toUpperCase?.()`.

---

## No optional chaining for assignment

Optional chaining is only used for **reading**. It **cannot** be used for assignment.

This means that the code below is **invalid** and will throw a syntax error:

```javascript
// ❌ Syntax Error
settings?.theme = "dark";
```
