# Fetch specify method

We talked about the `fetch()` method accepting the URL as a first argument. However, the `fetch()` method also accepts a 2nd argument that is optional.

In this second option, you can specify:

- the method of the request (GET/POST/PUT/DELETE)
- the headers you'd like to send
- the body you'd like to send

## Put, Post, and Delete

So, to perform a fetch request with a method other than GET, you will have to specify it in the 2nd argument under the `method` property.

Here's an example of a fetch POST request:

```javascript
fetch(URL, {
    method: "POST" // or "post"
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

## Sending 'body'

As we mentioned in the previous lesson, you will often need to send some details with requests that are PUT, POST, or DELETE. For example, an endpoint that posts a tweet would require the tweet text. Here's what its documentation would look like:

_Base URL_: https://example.com/api

Send a tweet. **POST** `/tweets` Body: `{tweet: "Your tweet here..."}`

Based on this documentation, here's how you'd write the full fetch request:

```javascript
fetch("https://example.com/api/tweets", {
    method: "POST",
    body: JSON.stringify({
        tweet: "Your tweet here..."
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read the server response
});
```

This is a very big piece of code. Let's break it down:

- We started by calling `fetch(URL)` and then provided the 2nd argument.
- In this second argument, we specified the `method` to **POST** (as mentioned in the documentation).
- We also needed to send the `body`. In this example, the tweet text. We followed the documentation and sent the object `{tweet: "Your tweet here..."}`. You could change the string `"Your tweet here..."` to send another text.
- We wrapped the body with `JSON.stringify()`. This is explained below.
- When the fetch request completes, we convert the server response to json.
- We log the data received from the server (this often contains the confirmation that the tweet was created).

## JSON.stringify the body

Back in the JSON chapter, we mentioned the following:

What you will end up needing frequently is converting from a JSON string into a JSON object (in JavaScript) and vice versa.

The reason why this is the most frequent use case is that when you communicate with an API, you cannot send an object. You will have to convert it to a string. Similarly, the API cannot send you an object, it will send you a string. But, that string is not any string. It's a JSON string. That means that it can be converted back into a JSON object.

So, we cannot send objects directly to the API, thus we have to convert them to a string with `JSON.stringify`.

---

## Fetch boilerplate

In summary, here's a fetch (Put/Post/Delete) boilerplate that you can save to your notes and use whenever necessary:

```javascript
fetch(URL, {
    method: "POST", // or PUT or DELETE
    body: JSON.stringify({
        key1: 'value1', // replace with key/value based on documentation
        key2: 'value2', // same as above (if needed)
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read server response
})
.catch(error => {
    console.error(error);
});
```

### It's too long

The code above works but is unfortunately way too long (even though we've simplified and skipped the `headers` for now).

Don't worry about that, we'll wrap `fetch` with our own class in a future chapter so that we can have a shorter more expressive way to work with `fetch`!
