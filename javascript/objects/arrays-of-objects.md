# Arrays of objects

Arrays of objects are the most common data type that you will encounter when working in web development, that's because most APIs (for example, a weather API, Twitter API, etc.) return arrays of objects.

Let's say that you're querying the Twitter API, here's how a response could look like:

```javascript
const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2020-01-03 11:46:00",
        author: {
            id: 109215315,
            firstName: "Jad",
            lastName: "Joubran",
            handle: "JoubranJad"
        }
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2021-02-19 15:32:00",
        author: {
            id: 109216891,
            firstName: "Sam",
            lastName: "Green",
            handle: "SamGreen"
        }
    }
];
```

This is an array of 2 objects. Notice that the tweets variable **is an array**.

Knowing that `tweets` is an array, we can access properties on arrays such as `.length` and call array methods such as `.forEach()`, `.map()`, etc.

