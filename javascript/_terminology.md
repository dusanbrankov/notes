# JavaScript Terminology

## Variable

**Defining a variable**

`let foo = "bar"`

**Re-assigning a variable**

`foo = "baz"`

---

## Function

### Callback

A callback is a function definition passed as an argument to another function.

`.forEach(callback)` iterates over every item in an array.

### Difference between parameters and arguments

A parameter is a **variable** in a function definition. When a function is called, the arguments are the **data** or **values** you pass into **the method's parameters**.

```javascript
function sum(param1, param2) {
  return param1 + param2
}
sum(5, 6) // <== 5 and 6 are the arguments
```

### Arrow function ipmlicit return

Implicit return allows you to omit the return keyword while having the result of the function returned.

For the implicit return to work, you should have all the following conditions:

- Your function should be an arrow function.
- The function body should be only one line. This means you have to remove the curly braces.
- You have to remove the return keyword because the function body is one line.

---

## Template string

Template strings start and end with a backtick "`" character.
They can span multiple lines and they support interpolation.

Interpolation means replacing a variable by its value inside a string.

---

## property vs method

**Properties** are pre-computed values which is why they should **not** have () after them.

On the other hand, **methods** requires the () because they perform an action.

```javascript
const text = "Hello World";

// property
text.length; // 11

// method
text.toUpperCase(); // "HELLO WORLD"
```

---

## Optional chaining

The `?.` operator allows you to access a property deep within an object without risking an error if one of the properties is `null` or `undefined`.

---

## nullish coalescing

The nullish coalescing `??` operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value.

A nullish value is a value that is either `null` or `undefined`.

---

## null vs undefined

`undefined` means that the property has not been defined yet. Whereas, `null` means that the property has been defined but is empty.

```javascript
const user = {
    id: 1,
    name: "Sam",
    age: null
}

console.log(user.age); // null
console.log(user.birthday); // undefined
```

---

## Promise

Promises is a JavaScript feature that allows us to schedule work in the future and then runs callbacks based on the outcome of the promise (whether it was successful or not).

### Resolve a promise

- A promise can have 3 states: pending, fulfilled, and rejected.
- Every promise starts with the pending state and then becomes fulfilled when it has been completed successfully.
- When a promise completes successfully, you will often hear/read people say that it has resolved.

When a promise completes successfully, you will often hear/read people say that it has **resolved**.

### Reject a promise

- The rejected state of a promise is meant for when things break. For example, a network connection issue.
- The callback provided to `.catch(callback)` will run if the promise ends up in the rejected state.
- A promise starts in the pending state and then will either resolve successfully (`fulfilled`) or reject with an error (`rejected`).

---

## DOM

The DOM (Document Object Model) is a JavaScript object & API (a set of functions) that represents the HTML of your page. It lets you interact from JavaScript with the elements on your page. You can read and change text, add and delete items, and a lot more.

### NodeList

A NodeList is a collection of DOM elements. This means that it is a variable that contains several DOM elements.

* document.querySelectorAll() always returns a NodeList.
* NodeList supports 1 property similar to arrays which is .length.
* NodeList supports accessing items by index. For example, [0].
* NodeList supports 1 method similar to arrays which is .forEach().
* All other array methods won't work on a NodeList. You cannot .filter on a NodeList.
* You cannot call .textContent on a NodeList because this property does not exist. You will have to iterate over it.
