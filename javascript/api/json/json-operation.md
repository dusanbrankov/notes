# JSON operation

As we mentioned in the previous lesson, you will frequently need to convert from a JSON string into a JSON object and vice versa. Let's start by looking at an example JSON string:

```json
'{"firstName":"Sam","lastName":"Green"}'

```

This string is what you may receive from an API. You can convert it back to a JSON object in JavaScript and save it in a variable so that it looks like this:

```javascript
const data = {
    firstName: "Sam",
    lastName: "Green"
};
```

The opposite is also possible. You can convert the JSON object into a JSON string. This will be useful to send the body of a fetch POST request

## JSON.parse(string)

In order to convert from a JSON string into a JSON object, you can use the `JSON.parse(string)` method:

```javascript
const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
const person = JSON.parse(string); // {firstName: "Sam", lastName: "Green", age: 32}
console.log(person.firstName); // "Sam"
```

This function is synchronous. This means that it will block the main thread of JavaScript. So, assuming you had a very long response from an API (several MBs), then the browser will become unusable for a second or two. This is not good.

In the `fetch` chapters, we'll learn about an asynchronous and non-blocking way to perform that. That method will return a promise (which you will have to resolve with `.then()`) because it's asynchronous.

## JSON.stringify(object)

In order to convert from an object into a JSON string, you have to use the `JSON.stringify(object)` method:

```javascript
const person = {
    firstName: "Sam",
    lastName: "Green",
    age: 32
};
const string = JSON.stringify(person);
console.log(string); //'{"firstName":"Sam","lastName":"Green","age":32}'
```

We will use this in the `fetch POST` chapter.
