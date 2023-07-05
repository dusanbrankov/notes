# Less used array methods

## Array.every(callback)

The Array `.every(callback)` method returns `true` when **every** item in the array satisfies the condition provided in the callback.

```javascript
const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false
```

---

## Array.some(callback)

Similarly, the Array `.some(callback)` method returns `true` when **at least one** item in the array satisfies the condition provided in the callback.

```javascript
const numbers = [15, 10, 20];

const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false
```
