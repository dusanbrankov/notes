// ❌ Whenever you're returning a boolean (true or false), it's quite redundant to use if and else. Here's an example:

function isPassing(grade) {
    if (grade >= 10) {
        return true;
    } else {
        return false;
    }
}

isPassing(12);

// This is redundant because grade >= 10 on its own, evaluates to true or false depending on the grade. This means you don't need to wrap it with an if/else statement.

// ✅️ That's why you can refactor it like this:

function isPassing(grade) {
    return grade >= 10;
}
