# Nullish coalescing

The nullish coalescing `??` operator is a new operator introduced in JavaScript that allows you to _default_ to a certain value when the left-hand side is a nullish value.

A nullish value is a value that is either `null` or `undefined`.

Here's an example:

```javascript
const getName = name => {
    return name ?? "N/A";
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"
```

Notice how when `name` is a nullish value (either `null` or `undefined`), then the right-hand side of the operator is executed. In this case, `"N/A"`.

This operator is useful to avoid showing `undefined` or `null` to the User Interface, which are often signs of bugs.

Whenever possible, if you can provide a default value, you can use the nullish coalescing operator `??` to show that default value.

Some common examples include:

- Showing an empty string `""` instead of `undefined` or `null`.
- Showing a string such as `"Deleted user"` instead of nullish value (`undefined` or `null`).
- Showing `"N/A"` (Not Applicable) instead of a nullish value.

---

## Variable must be defined

Similar to optional chaining, you can only use nullish coalescing when the variable is defined. So, the variable `name` (or whatever variable you use to the left-hand side of the operator) has to be defined.

---

## Nullish coalescing with optional chaining

Nullish coalescing can be used with optional chaining. The main usage here is to safely access a property that could be nullish while also being able to default to a certain value.

```javascript
let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
    name = user.details.name.firstName;
} else {
    name = "N/A";
}
```

The above code can be refactored as follows:

```javascript
const name = user.details?.name?.firstName ?? "N/A";
```

Optional chaining allows us to have `undefined` instead of an error. But `undefined` is not often useful, sometimes you'd like to default to an empty string or a certain value. This is where the combination of nullish coalescing and optional chaining comes in handy.
