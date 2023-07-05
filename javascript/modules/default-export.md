# Default export

There are some scenarios where you are sure that it will:

- either export **only** one variable/function/class.
- or, it will export several variables/functions/classes. However, one of these is considered the **main** one (or the most important one).

In any of the 2 cases above, you can (but you don't have to) use a **default export**. Here's how it works:

```javascript
// helpers.js
// notice the "export default"
export default class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
```

When you write `export default`, you're instructing JavaScript that this is the default variable/function/class exported by this module. This means that you can import it under any name you want. You also have to drop the curly braces from the import syntax:

```javascript
// import without curly braces
import Helper from "./helpers.js";
const helper = new Helper();
```

Since it's the default export, the following is also valid:

```javascript
// we can rename it because it's the default export
import StringHelper from "./helpers.js";
const helper = new StringHelper();
```

## Combination of default and named

It's also possible to have a default export as well as named exports in the same module:

```javascript
// helpers.js
export default class Helper {}

export const votingAge = 18;
```

These can then be imported as following:

```javascript
// index.js
import Helper from "./helpers.js";
// OR
import {votingAge} from "./helpers.js";
// OR
import Helper, {votingAge} from "./helpers.js";
```

This is a syntax that you often see in some front-end libraries/frameworks.

## Which one should you use?

When writing your own modules, you can decide to always use **named exports** if you'd like.

A mix of named exports and default export rarely makes sense unless you're writing a library to be used by others (we'll see an example of that in the next lesson).

So, it's often enough to ask yourself the following question:

**Do I expect to export anything else in this file?**

If the answer is **yes** or **maybe**, then you should go with named exports.

The most common use case for default exports is when you define a class in a file that you expect to use outside of that file. Since the file contains only 1 class, this could serve as the default export.
