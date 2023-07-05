let str = "42";

// Number.parseInt(string, radix);
Number.parseInt(str, 10); //42

// The radix is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is 10 which represents the way we count numbers in our everyday lives. This system is called the decimal system (because we have 10 fingers, so we use the digits from 0 to 9).

// Even though the radix is an optional parameter, you should not skip it. That's because it does not always default to 10.

// So make sure to always pass the radix as the 2nd parameter.



// If you forget to convert a string to a number, you will see that the intended addition is behaving like concatenation:

let a = 10;
let b = "20"; // we forgot to convert it to a number
a + b; // "1020" (concatenation instead of sum)



// The Number.parseInt() method will try to convert the string it receives into a number. As you can see below, it most often works when the string starts with a number and ends with non-numeric values:

Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5