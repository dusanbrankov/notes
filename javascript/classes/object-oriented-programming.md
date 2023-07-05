# Object-Oriented Programming

Object-Oriented Programming (OOP) is when you describe the real world with **classes** (that you can then instantiate which creates objects).

For example, the solution for the previous challenge:

```javascript
class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }

    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }

    canVote() {
        return this.age >= 18;
    }
}

// Sample usage
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false
```

Compare this to the procedural way of solving it (without classes):

```javascript
const getFullName = (firstName, lastName, prefix) => {
    return `${prefix}. ${firstName} ${lastName}`;
}

const canVote = (age) => {
     return age >= 18;
}

// Sample usage
console.log(getFullName("Sam", "Doe", "Mrs")); // "Mrs. Sam Doe"
console.log(canVote(20)); // true
console.log(getFullName("Alex", "Green", "Mr")); // "Mr. Alex Green"
console.log(canVote(17)); // false
```

Notice how in this example we don't have **objects**. We just have 2 functions and we call them several times. On the other hand, with the OOP example, we create an object `user1` which is an instance of the class User.

Grouping is the most obvious comparison between the two approaches, but it's not the only benefit. OOP has additional features such as getters, setters, static methods, inheritance, and more.

## Calling an instance method from another one

We saw in the previous lesson that an instance method has access to the instance variables defined on the class. They also have access to other instance methods on the class.

This means that an instance method can call another instance method using the `this.functionName()` syntax. For example:

```javascript
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getGreeting() {
        const fullName = this.getFullName(); // call an instance method
        return `Hello ${fullName}`
    }
}
```

Notice how the `getGreeting()` is able to use the `getFullName()` instance method by calling it with the `this.getFullName()` syntax.
