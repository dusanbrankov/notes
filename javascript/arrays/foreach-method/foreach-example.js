// Syntax
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Example
/**
 * @param {array} elements
 */
function loopThroughElements(elements) {
  elements.forEach(function(element) {
      console.log(element)
  })
}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console
