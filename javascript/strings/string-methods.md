# String methods

---

**Table of Contents**

1. **String .trim()**
2. **String .startsWith() and .endsWith()**
3. **String .includes(substring)**
4. **String .split(separator)**
5. **String.replace(search, replace)**
6. **String.replaceAll(search, replace)**

---

## String .trim()

Users will sometimes, by accident, enter an empty space character at the beginning or the end of a text box.

Say, for example, you ask the user for their name, and they enter `" Sam"` instead of `"Sam"`. This could cause issues in some scenarios (for example email addresses).

```javascript
const name = "  Sam Blue ";
name.trim(); // "Sam Blue"
```

---

## String .startsWith() and .endsWith()

The `.startsWith(substring)` method returns `true` when the `substring` is found at the **beginning** of the string, and `false` otherwise.

The `.endsWith(substring)` works the same but for the **end** of the string.

```javascript
const sentence = "Hello there. Welcome!";

sentence.startsWith("H"); // true
sentence.startsWith("Hello"); // true
sentence.startsWith("Hey"); // false
sentence.startsWith("Sam"); // false

sentence.endsWith("."); // false
sentence.endsWith("!"); // true
sentence.endsWith("Welcome!"); // true
sentence.endsWith("Welcome"); // false
```

---

## String .includes(substring)

The `.includes(substring)` method returns `true` when the `substring` can be found _anywhere_ in the string, and `false` otherwise.

```javascript
const sentence = "Hello there. Welcome!";

sentence.includes("there"); // true
sentence.includes("W"); // true
sentence.includes("Hello"); // true
sentence.includes("Hey"); // false
sentence.includes("Sam"); // false
sentence.includes("."); // true
sentence.includes("!"); // true
sentence.includes("Welcome"); // true
```

---

## String .split(separator)

The `.split(separator)` method divides the string into an array by splitting it with the `separator` you provide. For example:

```javascript
let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray); // ["Calculator", "Phone", "Contacts"]
```
This is especially useful to convert from CSV (Comma Separated Values) back to an array. Reminder that the opposite of `String.split(separator)` would be `Array.join(glue)`.

---

## String.replace(search, replace)

The `.replace(search, replace)` method returns a new string where the **first** occurrence of the `search` parameter you provide is replaced by the `replace` parameter, for example:

```javascript
const message = "You are welcome.";
message.replace(" ", "_"); // "You_are welcome."; (only the first occurrence has been replaced)
console.log(message); // "You are welcome." (original string is not changed)
```

---

## String.replaceAll(search, replace)

This method works like the one above, except that it will replace **all occurrences**.

```javascript
const message = "You are welcome.";
message.replaceAll(" ", "_"); // "You_are_welcome";
console.log(message); // "You are welcome" (original string is not changed)
```
