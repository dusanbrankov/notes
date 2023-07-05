# ES Modules

As the complexity of web application grows, we need to be able to write code in multiple files and reference functions (and variables) from another file. This helps in code reuse, readability, and maintenance.

## JavaScript modules

Every JavaScript file is called a **Module** or **ES Module**. We'll see in chapter 70 why it's called ES (which is short for EcmaScript).

Every JavaScript file (every module) is separate from the outside world. Every variable you define in a file with `let` or `const` is only available in that file, and not in the other files. The same applies to functions & classes.

This is when the `import` and `export` keywords become handy. It takes 2 steps:

1. First, you have to start by **exporting** the class(es)/function(s)/variable(s) that you need to use outside of this file.
2. Then, you can **import** them into the other file where you need to use them.

```javascript
// helpers.js
//note the "export" keyword
export class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
```

```javascript
// index.js
import {Helper} from "./helpers.js";

new Helper(); // works as expected
```

There are a couple of important notes on this:

- This is assuming both files are in the same folder, hence the path is `"./helpers.js"` (`./` means current directory).
- You cannot import `"helpers.js"` as this will import from an installed library (more on that in a future chapter). The path has to start with `./`.
- The `import` keyword has to be at the top of your file. You cannot run any other kind of JavaScript code before the `import` statements. So always start with the `import` statements at the top of the file. This limitation does **not** apply to `export` statements.
- You need to be using a module bundler (such as Webpack/Parcel/Vite) for this to work (we have a dedicated chapter about module bundlers later in this course) or you have to use `<script type="module"></script>` (explained at the end of this lesson).

The reason why `import` statements have to be at the top is because they are synchronous, which means the browser will wait until the line that is importing another file has completed, before running the next lines of code.

## Named exports

When you `export` a variable/function/class, this is called a **named export**. You can have several named exports in the same file. For example:

```javascript
// config.js
export const votingAge = 18;

export const settings = {
    theme: "light",
    admin: false
};
```

The `config.js` file above exports 2 variables. You can import one of the two, or both of them (depending on which variables you need):

```javascript
// index.js
import {votingAge} from "./config.js";
// OR
import {settings} from "./config.js";
// OR
import {settings, votingAge} from "./config.js";
```

## Using JavaScript Modules

If you're not using a module bundler (webpack/parcel) and you'd like to use `import/export` syntax, then you have to add `type="module"` to that script. This will enable the modern `import/export` syntax in the browser:

```html
<script type="module" src="index.js"></script>
```

Having the `type="module"` allows you to have the `import/export` syntax as well as helps you have this separation from file to file.
