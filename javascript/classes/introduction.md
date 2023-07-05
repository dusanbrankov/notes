# Introduction to classes

## What is a class?

When your code starts growing, you will have a few dozen functions in your source code. To better organize your code, you can group functions that perform similar functionalities into a single **class**.

This is one of the reasons why we have classes. The other main reason is because classes are reusable, take a look at this example:

```javascript
// create a new instance of Translation with the word "Table"
const firstTranslation = new Translation("Table");
firstTranslation.isEnglishWord(); //true

// create another instance of Translation with the word "España"
const secondTranslation = new Translation("España");
secondTranslation.isEnglishWord(); //false
```

These are 2 different **instances** of the same class "Translation". Every one of these instances acts differently, based on the word you've given it. The first one is an English word so `isEnglishWord` returns `true` whereas the other one is a Spanish word so `isEnglishWord` returns `false`.

Here's how you'd write the code for this Translation class:

```javascript
class Translation {
       constructor(word) {
            // capture constructor param into instance variable
            // this is explained in the next lesson
            this.word = word;
       }

       isEnglishWord() {
            // returns true when word is English, false otherwise
       }

       isSpanishWord() {
            // returns true when word is Spanish, false otherwise
       }
}
```

You should see how these `isEnglishWord()` and `isSpanishWord()` are grouped together inside the same `Translation` class.

## Creating an instance

To create an instance of a class, you have to use the `new` keyword before the name of the class. For example:

```javascript
const person1 = new Person("Sam Doe");
const person2 = new Person("Charley Bron");
```

In this example, the `person1` and `person2` variables are **instances** of the same class `Person`.
