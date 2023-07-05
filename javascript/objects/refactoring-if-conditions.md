# Refactoring if conditions

In this lesson, we're going to touch on a common scenario where you can completely get rid of `if` conditions and have far better maintainable code.

Let's say you're building an app like Deliveroo and you have a method that sends push notifications to your users updating them on the progress of their order:

```javascript
const getPushMessage = status => {
    if (status === "received") {
        return "Restaurant started working on your order.";
    } else if (status === "prepared") {
        return "Driver is picking up your food."
    } else if (status === "en_route") {
        return "Driver is cycling your way!";
    } else if (status === "arrived") {
        return "Enjoy your food!";
    } else {
        return "Unknown status";
    }
}
```

This is a very verbose way to deal with it. We can refactor it by creating an object that contains all possible messages, with the key of that object being the status. Let's refactor it:

```javascript
const getPushMessage = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!"
    };

    return messages[status] ?? "Unknown status";
}
```

Notice how we also used nullish coalescing to handle the else case when the status is different than the ones we provided.
