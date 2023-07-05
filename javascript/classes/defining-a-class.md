# Defining a class

## Define your own class

To define a class, you need to start with the `class` keyword followed by the name of the class.

The common convention for the name of the class is **UpperCamelCase** (also known as PascalCase). So the first character of every word should be in upper case, the rest in lower case.

```javascript
class QuickRecipe {

}
```

## Constructor

When you create a new instance of a class, the `constructor()` function will be automatically called. For example:

```javascript
// class definition
class Person {
    constructor() {
        console.log("I was automatically called");
    }
}

// class usage
const person = new Person; // () are optional when there are no arguments
```

The code above will log `"I was automatically called"` to the console.

If the constructor expects some parameters, you can pass some arguments to the `new Person(...)` call. These arguments will be passed to the constructor. For example:

```javascript
// class definition
class Person {
    constructor(firstName, lastName) {
        console.log(firstName + " " + lastName);
    }
}

// class usage
const person = new Person("Sam", "Green");
```

The code above will log `"Sam Green"` to the console.

## Capturing constructor params

When we call `new Person("Sam", "Green")`, the values `"Sam"` and `"Green"` are available respectively as `firstName` and `lastName` in the `constructor` function.

However, these `firstName` and `lastName` variables **won't** be available in other methods in this class. They will **only** be available in the constructor.

This is why, we can capture them and save them as **instance variables**:

```javascript
// class definition
class Person {
    constructor(firstName, lastName) {
        // capture firstName param into this.firstName instance variable
        this.firstName = firstName;
        // capture lastName param into this.lastName instance variable
        this.lastName = lastName;
    }
}

// class usage
const person = new Person("Sam", "Green");
```

## Instance variables

So what is an instance variable?

An instance variable is a variable that belongs to a specific instance of a class.

An instance variable is accessible in any instance method. Also, instance variables don't necessarily have to be created by capturing a constructor parameter. For example:

```javascript
// class definition
class Person {
    constructor(firstName, lastName) {
        // capture firstName param into this.firstName instance variable
        this.firstName = firstName;
        // capture lastName param into this.lastName instance variable
        this.lastName = lastName;
        // set an instance variable (without capturing a constructor param)
        this.votingAge = 18;
    }
}
```
