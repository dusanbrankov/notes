/**
 * @param {number[]} temperatures
 */
function getPositiveTemperatures(temperatures) {
  return temperatures.filter(function(temperature) {
      return temperature > 0
  })
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]