class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
                .then(response => response.json())
    }
}

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")

API.get("/notifications/new.json").then(data => {
    console.log(data)
})

// fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// });
console.log("Test")
