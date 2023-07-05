eligible        berechtigt, geeignet, qualifiziert


let city = "Amsterdam"
city = "New York"


function getNameLength(name) {
return name.length
}


function double(number) {
return number * 2
}


function getNextCentury(year) {
console.log(year + 100)
return year + 100
}


let name "alex"
let shouting = name.toUpperCase()


let name = "SaM"
let lowercased = name.toLowerCase()




function isFailingGrade(grade) {
    return grade < 10
}


function isEighteenYearsOld(age) {
    return age === 18
}


function isNotEighteen(age) {
    return age !== 18
}


function getVotingMessage(age) {
    if (age >= 18) {
        return "You are allowed to vote"
    }
}


function isPositive(number)
    if (number >= 0) {
        return true
    }
}



return "The message you return here will show up under the number"




function double(number) {
    return number * 2
}
let number = 10


function sum(a, b) {
    return a + b
}
let a = 1
let b = 3


function getLower(name) {
    return name.toLowerCase()
}
let name = "AleX"


function canVote(age) {
    if (age >= 18) {
        return true
    }
}
let age = 14
age = 18



let message1
let message2 = undefined


function getNameLength1(name) {
    name.length
}
function getNameLength2(name) {
    return name.length
}


function double(x) {
    return x * 2
}

function triple(x) {
    return x * 3
}

function run(operation, x) {
    if (operation === "double" ) {
        return double(x)
    }
    if (operation === "triple") {
        return triple(x)
    }
}








function greetUser(name){
    return `Welcome, ${name}`
}

function getAgeDescription(age) {
    return "You are currently " + age + " years old"
}

function greetUser(name){
    return `Welcome, ${name}`
}

function getAgeDescription(age) {
    return `You are currently ${age} years old`
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}




let grades = [10, 5, 13]
let firstGrade = grades[0]
let secondGrade = grades[1]
let thirdGrade = grades[2]

function getFirstGrade(grades) {
    return grades[0]
}

function getFullName(names) {
    return names[0] + " " + names[1]
}

function getRectangleDimensions(dimensions) {
    return `${dimensions[0]}px by ${dimensions[1]}px`
}



730







function fixFirstNumber(numbers) {
    numbers[0] = 2
    return numbers
}

function incrementFirstTemperature(temperatures) {
    temperatures[0] = temperatures[0] + 1
    return temperatures
}

function getMessage(items) {
    return `You have ${items.length} items`
}

function getLastGrade(grades) {
    return grades[grades.length - 1]
}

function addTemperature(temperatures) {
    temperatures.push(-6)
    return temperatures
}

function isTestTooEasy(grades) {
    return grades.includes(20)
}

function exportCSV(grades) {
    return grades.join(", ")
}

function convertToString(grades) {
    return grades.join(" & ")
}



let grades = [10, 18, 14, 15]
let sum = 0
grades.forEach(function(grade) {
sum = sum + grade
})

let temperatures = [-5, 12, 15, 18, 13]
let total = 0
temperatures.forEach(function(temperature)
total = total + temperature
})

function calculateSum(items) {
let sum = 0
items.forEach(function(item) {
sum = sum + item
})
return sum
}

function calculateAverage(items) {
let total = 0
items.forEach(function(item) {
total = total + item
})
return total / items.length
}



function sumGradesAbove10(grades) {
    let sum = 0
    grades.forEach(function(grade) {
        if (grade >= 10) {
            sum = sum + grade
        }
})
return sum
}

function tripleGrades(grades)
    return grades.map(function(grade) {
    return grade * 3
})

function sumNumbers(numbers) {
    return numbers.reduce(function(total, current) {
    return total + current
}, 0)
}

function multiplyNumbers(numbers) {
    return numbers.reduce(function(total, current) {
    return total * current
}, 1)
}




function logUsers(names) {
    names.forEach(function(name) {
    console.log(name)
    })
}

function hasCharacterBeenUsed(characters, char) {
    return characters.includes(char)
}

function exportCSV(users) {
    return users.join(", ")
}

function upperCaseNames(names) {
    return names.map(function(name) {
    return name.toUpperCase()
    })
}

function getInitials(names) {
    return names.map(function(name){
    return name[0]
})
}




let person = {
    firstName: "Sam",
    lastName: "Doe",
    age: 21,
    email: "sam@gmail.com",
    isVerified: false
};
person.isVerified = true;

function upgradeUser(user) {
    return user.hasPaid = true;
}

function getFullName(user) {
return `${user.firstName} ${user.lastName}`
}

function getSumOfGrades(student) {
    let sum = 0;
    student.grades.forEach(function(grade) {
        sum = sum + grade;
});
    return sum;
}

let config = {};
config.currency = "EUR";
config.theme = "dark";

let course = {
name: "Learn Programming",
instructor: {
    name: {
        first: "Jad",
        last: "Joubran"
},
    isProgrammer: true 
},
content: {
    dataTypes: true,
    functions: true,
    classes: true,
    dom: false
}
};

let user = {
    firstName: "Sam",
    lastName: "Doe",
    age: 21,
    greet: function(name) {
        return `Hello, ${name}!`
    }
};



class Animal {
    constructor() {
        console.log("Creating instance of Animal")
    }
}




class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let user = new User("Sam", "Blue", 30);




class Employee {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }

    canVote() {
        return this.age >= 18;
    }
}

let john = new Employee("John", "Snow", 18);
let sam = new Employee("Sam", "Tarly", 17);





git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
