// When you call substring, you can give it 2 parameters, the first one for the indexStart and the second one for indexEnd.

// someString.substring(indexStart, indexEnd)

const language = "JavaScript";
language.substring(1, 4); //"ava"

// Optional parameters:
// The indexEnd parameter is optional, which means you can pass the indexStart and it'll assume the indexEnd to be the same as the string length. Here's an example:

language.substring(4); //"Script"

// ! Do not use the .substr method as it's deprecated and works differently. Always use the .substring method.