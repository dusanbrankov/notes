# Class inheritance

When describing the real world with classes, you will notice sometimes that some classes are very similar. In fact, some methods would be exactly the same thing (maybe with different variable names). For example, let's say you're creating classes for your company where you've got an employee and a manager. Here's how they would look:

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

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }
}
```

Do you notice the similarity between these classes? They share the same `constructor()`, `getFullName()`, and `getInitials()`. The `Manager` class has an extra instance method called `sendPerformanceReview()` which does not exist for `Employee`.

This is an example where we can use inheritance to reduce the duplication. We can notice that `Manager` implements all the methods from `Employee` (and has extra ones). Thus, `Manager` inherits from `Employee`. Which means that `Manager` will get all the methods defined on `Employee`. Here's how you write it, using the `extends` keyword:

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
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }
}
```

The `extends Employee` will allow `Manager` to inherit all the methods defined on `Employee`, which is why the code below runs successfully:

```javascript
const manager = new Manager("Sam", "Green");
manager.sendPerformanceReview(); // logs "Sent performance review for current quarter"
manager.getFullName(); // "Sam Green"
manager.getInitials(); // "SG"
```

Notice how we were able to call the methods `getFullName()` and `getInitials()` just because `Manager` extends from `Employee`.

## Overriding methods

What if we'd like a different implementation for `getFullName()`? For example, we'd like to return `(manager)` after the full name. This is possible in inheritance. You can override functions. Here's how:

```javascript
// assuming the same class definition for Employee

class Manager extends Employee {
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }
}
```

In this example, the `Manager` class will have the same `constructor()` and `getInitials()` methods inherited from the Employee class. However, we have overridden the `getFullName()` method and added a new instance method called `sendPerformanceReview()`.
