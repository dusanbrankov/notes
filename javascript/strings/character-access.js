// You can access a specific character in a string by using the square brackets syntax [].

const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character

console.log(language[1]);


// You can also combine the character access with the .length property. So using the same language variable, here's how you get the second to last character from it:

const languageOne = "JavaScript";

languageOne[ languageOne.length - 2 ]; // "p" because it's the second to last character from "JavaScript"


// Since 2022, JavaScript now has a .at() method that reads the character at a certain index, which can also be negative.

const languageTwo = "JavaScript";
languageTwo.at(0); // "J"
languageTwo.at(1); // "a"
languageTwo.at(-1); // "t"
languageTwo.at(-2); // "p"

// The primary use case for the .at() method is negative indices, making it easier than relying on the .length property.