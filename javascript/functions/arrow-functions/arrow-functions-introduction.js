// An arrow function has 3 main benefits:

//     It's shorter to write.
//     It uses lexical scope (this will be explained in a later chapter as we need to learn about classes first).
//     It can benefit from implicit return (covered in the next chapter).

function sum(a, b) {
    return a + b;
}

// Can be written as:

const sum = (a, b) => {
    return a + b;
}

// Array methods with arrow function

grades.forEach((grade) => {
    console.log(grade);
});

// Also, because the arrow function has one parameter (without a default value), you are allowed to drop the parentheses () surrounding the parameter:

grades.forEach(grade => {
    console.log(grade);
});
