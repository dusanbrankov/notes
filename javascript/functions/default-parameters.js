// Default parameters allow you to give a default value for one or more parameters that have not been provided when the function is called.

function addOne(number = 0) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne(); // 1

// Another example

function welcomeUser(name = "user") {
    return `Hello ${name}`;
}

welcomeUser("Sam"); // "Hello Sam"
welcomeUser(); // "Hello user"
