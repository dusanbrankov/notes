// 💡️ CONTENT OF ELEMENT

// get text content of element
element.textContent

// empty content of element
element.innerHTML = ""

// ---------------------------------------

// 💡️ ATTRIBUTES AND STYLES

// get the value of a certain attribute
element.getAttribute(key)

// remove an attribute
element.removeAttribute(key)

// write a new attribute (or updates the value of an old one that already exists)
element.setAttribute(key, value)

// check whether an attribute exists or not
element.hasAttribute(key)

// update or add style property to an element
element.style.fontColor = "red";

// ---------------------------------------

// 💡️ ELEMENTS AND ATTRIBUTES

// access body
document.body

// access HTML
document.documentElement

// remove element from the DOM
element.remove()

// convert NodeList into an array
const items = [...document.querySelectorAll(".selector")]

// return an object containing all the data attributes on that element
element.dataset

// return value of data-attribute fooBar
element.dataset.fooBar
