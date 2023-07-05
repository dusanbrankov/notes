# Fetch wrapper

The` _send()` method takes the method (`"put"`, `"post"`, or `"delete"`) followed by the endpoint and the body.

So, now, we can implement the `put()`, `post()`, and `delete()` methods that call this internal `_send()` method:

```javascript
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
```

## How to use

```javascript
const form = document.querySelector("#grades-form");
const input = document.querySelector("#user-grade");

const API = new FetchWrapper("https://api.learnjavascript.online/demo/");

form.addEventListener("submit", event => {
    event.preventDefault();
    API.post("grades.json", {
        grade: input.value
    })
    .then(data => {
        console.log(data.grade);
    });
});
```
