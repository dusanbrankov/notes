# Fetching JSON

Fetch is used to get the result of a certain URL without reloading the page. This URL can return Text, or JSON, or Binary data, or even other formats.

However, as a JavaScript developer, you will work with JSON for about 99% of the time.

## Fetch returns a promise

So, what do we get when we resolve this promise? We get a Response object that we're going to call `response`. We will dive deeper into this response object in the next chapter.

```javascript
fetch(URL)
    .then(response => {
        console.log(response); // detailed in next chapter
    });
```

So, because `fetch(URL)` returns a promise, we can resolve the promise with a `.then(callback)`. This callback will run sometime in the future when the fetch request has been completed.

Also, this callback will receive as a first argument the response from the request that we sent. You can call this argument whatever you want, however, we recommend that you call it `response`.

## Fetching JSON

In this chapter, you will learn how to consume **JSON** data using `fetch`. But keep in mind that `fetch` itself is a generic browser function and is not only meant for reading JSON.

This is why whenever you `fetch(URL)`, the response that we get back is just a response object and the browser doesn't know that the data it has received is in **JSON** format. This is why we should manually convert the response into JSON:

```javascript
fetch(URL)
    .then(response => {
        return response.json();
    });
```

Refactoring (with implicit return):

```javascript
fetch(URL)
    .then(response => response.json());
```

This `.json()` method on response is almost exactly the same as `JSON.parse(string)`. The only difference however is that `response.json()` is non-blocking and asynchronous meaning that it returns a promise.

What you need to understand is that every time you send a fetch request to a certain API and you expect JSON (which is most of the time), you should convert the response that you get back into JSON format.
