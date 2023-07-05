# Lexical Scope

Back at the beginning of this course, you learned about Arrow functions and we explained one of the 2 differences (which is that arrow functions have a shorter syntax). However, there's another difference that relates to the keyword `this`.

The difference is _mostly_ apparent when you use classes. Let's take an example where we can visualize the difference:

```javascript
class App {
    constructor() {
        this.navbar = document.querySelector("#navbar");
        this.initEvents();
  }

  initEvents() {
        this.navbar.addEventListener("click", function() {
            console.log(this.navbar); // undefined
            this.navbar.remove();
        });
    }
}
```

This code will throw an **error** because we're trying to call `remove()` on `undefined`.
`this.navbar` will return `undefined` for some reason, and you can see that with the `console.log(this.navbar)`.

Here's why:

In the `initEvents()` function, we added an event listener and used a `function() { }` rather than an _arrow function_.

Every time you create a `function() {}`, JavaScript will define a **new value** of this inside of that function. So, `this.navbar` returns `undefined` because `this` inside the event listener function is not the same as `this` in the outer function.

## How do we solve this?

I will walk you through 3 solutions to this problem because you might see them in other people's code on the Internet. However, note that you should only use the last solution because it's the most elegant one.

### 1. Capture the value of this

**Do not use this method** as it dates back to before 2015 (before ES2015 was released). Because this method is old, dating to when JavaScript was limited, it's not elegant at all. However, you might see it in some legacy code online.

This method works by capturing the value of `this` in a different variable which you can then use inside the `function`.

```javascript
class App {
    constructor() {
        this.navbar = document.querySelector("#navbar");
        this.initEvents();
    }

    initEvents() {
        //capture the value so that we can use it inside the function() { }
        const that = this;
        this.navbar.addEventListener("click", function() {
            console.log(this.navbar); // undefined because `this` inside the function has a new value
            console.log(that.navbar); // returns the navbar because `that` holds the value of the outer function
            that.navbar.remove(); // works
        });
    }
}
```

### 2. Binding the value of this

This is slightly more elegant than the previous one. We call `.bind(this)` on the `function() { }` like this: `function() { }.bind(this)` so that we pass the outer value of this into the function.

```javascript
class App {
    constructor() {
        this.navbar = document.querySelector("#navbar");
        this.initEvents();
    }

    initEvents() {
        this.navbar.addEventListener("click", function() {
            console.log(this.navbar); // returns the navbar because `this` is bound to the correct value
            this.navbar.remove(); // works
        }.bind(this)); //bind the value of this from outside the function into the inner function
    }
}
```

### 3. Arrow functions (the elegant fix)

This is the proper/elegant fix that **you should use**.
You have to change the `function() { }` into an **arrow function** `() => {}` and this will solve the issue.

This is because arrow functions do **not** create a new value of `this`. Instead, they give you the same value as the one outside.

```javascript
class App {
    constructor() {
        this.navbar = document.querySelector("#navbar");
        this.initEvents();
    }

    initEvents() {
        this.navbar.addEventListener("click", () => {
            console.log(this.navbar);
            this.navbar.remove();
        });
    }
}
```

Arrow functions are said to have a Lexical scope, which is exactly what was explained in this lesson: it means that `this` inside of them, is the same as the outer function.
