# Deleting items

Say you've got an array and you'd like to empty it, you can do that by setting its length to 0:

```javascript
const items = ["Pen", "Paper"];
items.length = 0;

console.log(items); // []
```

---

## Array.splice()

You can also delete specific items from an array using the `splice(start[, deleteCount])` method.

> Did you notice the` [, deleteCount]` syntax? You will often see this syntax in documentation, which means that the `deleteCount` parameter is **optional**.

The `.splice(start[, deleteCount])` method removes items from the array starting from the `start` index that you specify. If no `deleteCount` is provided, it will remove all the remaining items as of the start index.

**Exmaples:**

- To delete the 1st element of an array, you call `.splice(0, 1)`.
- To delete 3 elements starting from the 2nd position, you call `.splice(1, 3)`.
- If you call `.splice(1)`, then it will remove all the items starting from the 2nd position (index 1).

```javascript
const items = ["Pen", "Paper", "Staples"];
const deletedItem = items.splice(0, 1); // removes one element at index 0
console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]
```
