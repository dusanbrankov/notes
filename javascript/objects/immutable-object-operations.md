# Immutable object operations

We need to create a copy of the object instead of changing the original one. To do so, you can also use the `...` operator to clone an object:

```javascript
const user = {
    id: 1,
    age: 23
};
const cloned = {...user};
console.log(cloned); // {id: 1, age: 23} (new object not related to 'user')
```

## Immutable update

To immutably update an object, you need to make a copy of it and then add the new `key: value` that will override the previous one.

```javascript
const user = {
    id: 1,
    age: 23
};
const clonedUser = {
    ...user,
    age: user.age + 1
};
console.log(clonedUser); // {id: 1, age: 24} (new object not related to 'user')
```

## Immutable delete

Though less used, here's how you can immutably delete a property from an object. It's a combination of object destructuring and the `...` operator:

```javascript
const book = {
    id: 1,
    title: "Harry Potter",
    year: 2017,
    rating: 4.5
}

// GOOD: immutable
const {year, ...rest} = book;
console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
```

The reason why this works is because `{year, ...rest} = book` is destructuring the value of the key `year` from the `book` object. This is similar to reading `book.year`.

However, notice how we ask JavaScript to destructure the rest of the object with `...rest`. This means combining all the other key/values in a new object called `rest`. So we end up with `rest` which is an immutable copy of `book` excluding the `year` property!
