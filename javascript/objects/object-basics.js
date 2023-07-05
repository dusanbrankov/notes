// Create an object

const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

// Read the value of a property

user.id; // 1
user.firstName; // "Sam"
user.isAdmin; // undefined (property does not exist)

// Updating property value

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // {id: 1, firstName: "Sam", lastName: "Blue", age: 21}

// [!] You are able to update the property value of an object defined by const because const does not mean that the variable is a constant, it just means that you cannot re-assign it. Thus, the variable is always an object, but its content (properties) can change.

// Object inside a function

function getProductDetails() {
    return {
        id: 1,
        title: "Road bike",
        inStock: true
    }
}

// Sample usage - do not modify
console.log(getProductDetails()); // the object you define
