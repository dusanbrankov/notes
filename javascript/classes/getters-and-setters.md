# Getters & Setters

This chapter explains class concepts that are relatively less used compared to the ones we've already seen before.

## Setter

Defining getters and setters in a class is _mostly_ used to validate or modify certain values before they are set as properties on a class.

Let's take an example where we'd like to create a class `User` that has an `age` property. However, we'd like to always make sure that this `age` property is a number. For that, we define a setter for the `age` property. Here's what the setter looks like:

```javascript
class User {
    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
```

We've added a `console.log("age setter")` so that you can see when this setter gets called.

Inside this setter, we're converting the value to a number (with `Number.parseInt(string, 10)`), and then we set the result on a new instance variable called `this._age`.

The `_` here in `_age` is a convention meaning that this property is internal to the class and should not be accessed from outside. This is very important. If you accidentally set the result on `this.age`, then you end up creating an infinite loop. That's because whenever you try to access `this.age`, JavaScript will automatically call this setter. So you end up with a function that keeps calling itself forever.

Let's see how we can use the class that we defined above:

```javascript
const user = new User();
user.age = "18";
console.log(user); // {_age: 18}
```

Notice how we are able to set the `age` property on the `user` instance by setting `user.age =` to a certain value.

In this example, we set it to a string `"18"`, which then gets converted to a number by the setter. So, setting `user.age =` will call the `set age(value)` function and the value will receive the string `"18"`.

This setter will then create a new instance variable called `_age` and set it to `18` (as a number).

---

## Getter

The remaining problem is that if we try to access `user.age`, we get `undefined`. That's because we have not defined a `getter` for the `age` property.

Let's go ahead and define a **getter** for the `age` property. We do that by defining a `get age()` function as follows:

```javascript
class User {
    get age() {
        console.log("age getter");
        return this._age;
    }

    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
```

With the class definition above, here's how we can use it:

```javascript
const user = new User();
user.age = "20"; // calls set age(value)
console.log(user.age); // calls get age(), returns 20 (number)
```

You may have noticed that the `setter` receives a value whereas the `getter` doesn't. This is because the `value` (or any parameter name you choose) provided to the `setter` is the value written after the equal sign. However, for the `getter`, there is no equal sign. You're only reading the value.

---

## Putting it all together

You can still use getters and setters with the pattern where you capture constructor parameters. That's because, whenever you access `this.age` from within the class, it will also automatically trigger the `set age(value)` function. This is why we had to create an internal property and call it `this._age` to avoid creating an infinite loop.

```javascript
class User {
    constructor(age) {
        this.age = age; // calls set age(value)
    }

    get age() {
        console.log("age getter");
        return this._age;
    }

    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
```

This allows us to set the `age` when creating a new instance of `User` but also change it later on:

```javascript
const user = new User("30");
console.log(user.age); // 30 (number)
user.age = "31";
console.log(user.age); // 31 (number)
```

The end result shows that we've enforced the `age` to always be a number because we always convert the received value to a number. You can also change the formatting of a number as we'll see in following challenges.
