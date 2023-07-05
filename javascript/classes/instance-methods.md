# Instance methods

We previously talked about how classes group common functionality together. This is achieved by defining instance methods.

Instance methods are functions that can be called on an **instance** of a class. Let's take an example:

```javascript
// class definition
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// class usage
const person = new Person("Sam", "Green");
console.log(person.getFullName()); // "Sam Green"
```

The `getFullName()` is an instance method. We write it inside the class definition, and then we are able to call it on an instance (for example the variable person).

You cannot call `Person.getFullName()`. For that to work, `getFullName()` must be a static method. This is explained in the next chapter.

It only works on instances, which is why it works on person because that variable was assigned to new `Person(...)`.

---

The code below does **not** work, because `firstName` and `lastName` are not defined:

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        // ❌ this does NOT work
        return `${firstName} ${lastName}`;
    }
}
```

That is the reason why we learned how to capture `constructor` params in the previous chapter as this will allow us to use the values that we captured by setting them as instance variables.

This is what the keyword `this` refers to. It's referring to the current instance of the class.
