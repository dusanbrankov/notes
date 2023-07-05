# Rejected state

Things don't always go as planned. Sometimes, things fail. This is why we have the `rejected` state.

For example, let's say you're trying to connect to a weather service/API, this might fail because of a network connection issue. In that case, the promise will not resolve successfully (it will not be fulfilled). Instead, it will be `rejected`.

This lets us know that something went wrong which allows us to handle the error by showing an error message or a retry button for example.

In this case, we say that the promise rejected. The reason for this naming will become clearer once we learn about the `Promise.reject()` method.

## .catch(callback)

The `.catch(callback)` allows you to handle the rejected state of a promise. Here's an example:

```javascript
getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error); // {error: "Connection issue"}
    });
```

The `.catch(callback)` will run when the promise is not successful.

The first argument (which we called `error` here), can be a string, an object, etc.

## Promise life cycle

A promise starts in the `pending` state and then will either resolve successfully (`fulfilled`) or reject with an error (`rejected`).

It is also possible for a promise to never resolve. This can be caused by one of 2 reasons:

- wrong implementation of the promise (that should be fixed)
- the condition that resolves the promise is never achieved (this is okay)

An example of the latter, let's say we've got a promise that resolves when the user clicks on a button. If the user never clicks on the button, then the promise will never resolve (or reject). It will always stay in the `pending` state.
