# Object concatenation

In some scenarios, you'd like to merge 2 objects together. You can do that using the `...` spread operator.

```javascript
const firstPerson = {
    name: "Sam",
    age: 18
}

const secondPerson = {
    age: 25,
    type: "admin"
}

const mergedObjects = {...firstPerson, ...secondPerson};
console.log(mergedObjects); // {name: "Sam", age: 25, type: "admin"}
```

Notice how the new object ended up with the `name` and `type` from both objects. However, regarding the `age`, since it exists in both objects, only the 2nd one persisted. This is why the order of the objects matters when spreading them.
