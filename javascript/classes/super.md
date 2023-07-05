# Super

Let's go back to the example from the previous lesson, however, this time, the `Manager`'s constructor will have one extra parameter called `department`:

```javascript
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Manager {
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
}
```

How can we use inheritance in this example? The constructors are not the same anymore.

This is where we can use the `super` keyword which is used to call functions on the parent class.

```javascript
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName); // super must be called first
        this.department = department;
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
}
```

The `super(firstName, lastName)` is calling the `Employee` class' constructor. So, `super()` calls the parent class' constructor.

If the parent class' constructor has no parameters, then you call `super()`. Otherwise, you can pass parameters just like we did in this example with `super(firstName, lastName)`.

In this example, the `Manager` class will end up having 3 instance variables `this.firstName` and `this.lastName` which are set by the `Employee`'s constructor, and `this.department` which is set by the `Manager`'s constructor.

## Calling parent instance methods

This is a little bit lesser-used, but you can call functions on the parent class also using the `super` keyword:

```javascript
// assuming the same class definition for Employee

class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName); // super must be called first
        this.department = department;
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }

    getFullName() {
        return super.getFullName() + " [manager]";
    }
}
```

Notice how the `getFullName()` instance method calls the `Employee`'s `getFullName()` with `super.getFullName()`.

```javascript
// Sample usage
const manager = new Manager("Sam", "Blue", "Marketing");
console.log(manager.department); // "Marketing"
console.log(manager.getFullName()); // "Sam Blue [manager]"
```
