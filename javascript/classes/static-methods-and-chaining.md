# Static methods & chaining

## Static methods

We saw in the previous chapter that instance methods are methods that we can call on an instance of a class (the result of `new ClassName()`).

For some use cases though, we can create methods that can be called directly on the class and not on the instance. Here's how we use them, assuming a class `Config`:

```javascript
console.log(Config.getYear()); // for example, 2025
```

Notice how we called the method `getYear()` directly on the class `Config` rather than on an instance. In fact, if you call it on an instance, it does not work because this is a `static` method. Here's how you implement this static method:

```javascript
class Config {
    static getYear() {
        // code to get the current year (for example, 2025)
        const date = new Date();
        return date.getFullYear();
    }
}
```

As you can see, static methods are methods prefixed with the keyword `static`.

### When to create static methods?

Though static methods are less used compared to instance methods, here are some common questions you can ask yourself that will help you decide if the method should be static:

- Is the result of this method the same across all instances of the class? If yes, then it should be static.
- Is the method not accessing any instance variable of this class? If yes, then most likely it should be static.

### Static methods cannot access this.

Since static methods are called on the class and not an instance, they cannot access instance variables or instance methods. Thus, you cannot use `this.` inside of them.

If you find yourself needing to use `this.` inside a static method, then it means it should _not_ be static.

---

## Method chaining

You may sometimes encounter method chaining, which is a method called on the result of another method. For example, assuming a class `Course`:

```javascript
const course = new Course("Learn JavaScript", false);
course.markAsCompleted().setGrade(18).requestCertificate();
```

Notice how we call `setGrade(18)` on the result of `.markAsCompleted()`. Similarly, we call `.requestCertificate()` on the result of `setGrade(18)`.

For this to work, these instance methods should always return `this`. The reference to the current instance. By doing so, you are able to call other methods on the instance because they're returning the current instance.

To make this work, you need to make sure that these instance methods are returning `this`:

```javascript
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }

    markAsCompleted() {
        this.isCompleted = true;
        return this; // allows method chaining
    }

    setGrade(grade) {
        this.grade = grade;
        return this; // allows method chaining
    }

    requestCertificate() {
        this.askedForCertificate = true;
        return this; // allows method chaining
    }
}
```
