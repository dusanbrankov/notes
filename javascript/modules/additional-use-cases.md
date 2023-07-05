# Additional use cases

If you end up learning a front-end framework/library, you will then have to `import` the functions/classes provided by that library. Here's an example for React that uses a mix of **named imports** and **default import**:

```javascript
import React, {useState, useContext} from "react";
```

Notice how the React object is the default import and then `useState` and `useContext` are named imports.

## Renaming

It's also possible to rename a variable/function/class that you import. This is useful if your current file contains the same name that you're trying to import.

For example:

```javascript
import {getDate as getDateHelper} from "./date-helpers.js";

const getDate() {
    // ...
}
getDateHelper(); // the function that was imported
```

Ideally, it's best to avoid the need to have to rename it. But, sometimes you have no other choice.

## Importing from a library

The syntax to import from a library is similar, except that the path should not be a file location (for example, `./`) but rather a package name. So, for example:

```javascript
import _ from "lodash";
```

This needs some special setup for it to work. We will cover that in the future.

## Dynamic imports

Dynamic imports allow you to import another file/module only when necessary. The syntax is similar except that `import` is used as a function. For example:

```javascript
import("./helpers.js").then(module => {
    console.log(module);
});
```

You may have noticed that `import()` (when used as a function) returns a promise. This will be covered in a future chapter.
