# Reading JSON

## response.json() returns a promise

Just like how `fetch(URL)` returns a promise, the `response.json()` method also returns a promise. This means that we cannot read its result directly. Instead, we have to resolve the promise with `.then(callback)`.

Doing so, will give us access to the `data` that we get back from fetching that URL. Here's what the syntax looks like:

```javascript
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
```

Notice how we had to call `.then()` twice. That's because `fetch(URL)` and `response.json()` both return a promise.

Calling `.then()` on the result of `.then()` is called **promise chaining**.

## What is 'data'?

The data variable will be the information that the **API** returns.
If we go back to the previous example of the Twitter notifications, `data` will contain an object with the number of new notifications. It will look like this:

```javascript
{
    count: 3,
    message: "You've got 3 new notifications"
}

```

Other APIs will have a completely different response.

## The 'data'

When you resolve the promise of `response.json()`, the callback you pass to `.then(callback)` will receive the first argument. We recommend that you call this first argument `data` (in contrast to `response`).

`data` is what you're interested in reading whereas `response` is an intermediary step that we have to work with before being able to access the data (because we need to convert the response to JSON).

In a future chapter, we'll shorten that down to 1 step since we almost always want to convert to JSON.

The data that you receive will be one of the previous data types that you learned:

- **array**
- **object**
- boolean
- string
- number

Most of the time, APIs will return either an array (of objects, of numbers, etc.) or an object.

It's extremely important to add a `console.log(data)` the first time you work with a URL so that you can see, visualize & understand what kind of data this API (and this particular URL) is returning.

Every API is different. Every API is developed by different people, companies, and has different goals.

For example, an API that returns the list of football players will most likely return an array of objects. Whereas an API returning the currency rate of USD and EUR will most likely return an object.

Moreover, the same API can have different return types per URL because every URL handles different logic. For example, when you ask for all the exchange rates you will most likely receive an array of objects, however, when you ask for a specific exchange rate against USD, you may receive an object.

There are no rules here, it depends on how the company behind this API/service has decided to implement their response.

## Base URL & endpoints

Whenever you're working with APIs, you will have to read the official documentation. For example, if you're working with the Twitter API, you will have to read the Twitter documentation.

A common pattern you'll see in documentation is that they will not repeat the start of the URL for every single API URL. For example, let's say Twitter's API has the following API URLs:

- https://twitter.com/api/v1/users.json
- https://twitter.com/api/v1/notifications.json
- https://twitter.com/api/v1/tweets.json
- https://twitter.com/api/v1/account/password.json

Instead, they'll tell you that the Base URL is https://twitter.com/api/v1 and then they will list the API endpoints as follows:

- /users.json
- /notifications.json
- /tweets.json
- /account/password.json

This avoids repetition and makes the documentation easier to read.

We use the words endpoint and URL interchangeably. When working with APIs, you will often hear developers say the word endpoint more frequently than URL.
