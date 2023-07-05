# Intro to fetch

Let's say you open your Twitter notifications page and wait until someone favorites your tweet. We use the fetch Web API (or fetch API) to make a request to a server (which could be ours or an external one, for example, a Weather API) to retrieve some information without reloading the page.

## Fetch syntax

We will progressively learn the syntax of fetch throughout the next few lessons & challenges. Let's start with the basics:

```javascript
fetch(URL)
```

This is how you fetch a `URL`. You need to replace the `URL` with an actual URL string. So let's take an example, with a sample API built specifically for this course:

<https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json>

Open this URL and notice that it returns JSON. This is how we communicate with external services. This API lets us know that there are 3 new notifications.

Now, we need to do the same process but with a piece of JavaScript code. So, we need to be able to send a request to this URL and get back its result. To do that, we use the `fetch` API.

So, in our example, we'll need to fetch this URL that we linked to above. This is what it will look like:

```javascript
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
```

This is the **first** step to working with the `fetch` API.

It will send a request (sometimes called AJAX request or XMLHttpRequest for historical reasons). This request will go to the Internet, reach the URL you specified and finally come back to you with the response (result) from that URL.

## Fetch returns a promise

This is extremely important. Fetch always returns a promise.

This is because fetch has to go to the network, this could take anywhere between a couple of milliseconds and a second (on average). So, we cannot freeze the entire browser while the fetch request is working.

Thus, by design, `fetch` returns a promise that we can resolve once the request has finished.

This means that we'll have to add a `.then()` after the `fetch()` call.
