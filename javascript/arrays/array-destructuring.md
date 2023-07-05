# Array destructuring

Array destructuring is a relatively new feature of the JavaScript language and is considered syntactic sugar, meaning that it makes your code easier to read.

Say you've got the following array containing the `width` and `height` of an item and you'd like to create variables for the `width` and `height`:

```javascript
const dimensions = [20, 5]

// create variables
const width = dimensions[0];
const height = dimensions[1];

// log them
console.log(width); //20
console.log(height); //5
```

The above code can be rewritten using the new array destructuring syntax as follows:

```javascript
const dimensions = [20, 5]

// create variables
const [width, height] = dimensions;

// log them
console.log(width); //20
console.log(height); //5
```

> You can identify destructuring when you see the square brackets [] on the left side of the equal sign.
