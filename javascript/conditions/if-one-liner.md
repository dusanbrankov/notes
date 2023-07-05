```javascript
 const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    // optional chaining is not enough because we need to return an empty string
    // when the element doesn't exist. This is why we used optional chaining + nullish coalescing
    return element?.textContent ?? "";
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // ""
```
> see 'objects/refactoring-if-conditions.md'
