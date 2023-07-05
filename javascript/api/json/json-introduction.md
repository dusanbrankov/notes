# JSON

## Why JSON

In most of the projects you'll end up working on, you will have to work with some kind of API.

An API is a means for a website or an application to communicate with another one. For example:

- Your website needs to know the currency exchange for **Euro** and **USD**. You use an API for that.
- LearnJavaScript.online wants to get your verified email to log you in. We've used the GitHub API for that.

Most popular APIs communicate in a common language, which is **JSON**. Just like you'd communicate with a person from a different country in English (not the case worldwide).

On the other hand, a Web API is a feature provided by the browser. For example, the `fetch` Web API, or in short, the `fetch` API is a functionality provided by the browser.

## What is JSON?

JSON stands for JavaScript Object Notation. It's a format for storing and sending data. It's very commonly used on the web because it's lightweight. Here's an example of a JSON object in an example file called `person.json`:

```json
{
    "firstName": "Sam",
    "lastName": "Green",
    "age": 24
}
```

Notice that the keys had to be wrapped in a string (`"firstName"`, `"lastName"`, and `"age"`).

The example above shows a JSON object saved into a file. However, when used in JavaScript, you can omit the **quotes** around the keys. You will also have to assign it to a variable. For example:

```javascript
const person = {
    firstName: "Sam",
    lastName: "Green",
    age: 24
};
```

JSON is a subset of JavaScript objects. This means that every JSON object is a JavaScript object whereas not every JavaScript object is a JSON object. This is not something you will encounter frequently, but the following is a _JavaScript object_ but **not** a _JSON object_:

```javascript
const user = {
    firstName: "Sam",
    lastName: "Green",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
```

The reason why this object is **not** a JSON object is that it contains a function.

### Common use case

What you will end up needing frequently is converting from a JSON string into a JSON object (in JavaScript) and vice versa. We will learn that in the next lesson.

The reason why this is the most frequent use case is that when you communicate with an API, you cannot send an object. You will have to convert it to a string. Similarly, the API cannot send you an object, it will send you a string. But, that string is not any string. It's a JSON string. That means that it can be converted back into a JSON object.

## Benefits of using JSON

The major benefit of JSON is that it doesn't really matter in which programming language the API we're trying to talk to is written in. It could be python, node, PHP, Ruby, etc.

As long as it can read and receive JSON, we can both communicate.

It's like you're traveling to a foreign country. It doesn't matter the native language of the other person you're communicating with, as long as you can both speak English (or another common language).
