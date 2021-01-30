/**
 * binarySearchPosition: a function for returning the target number in a given array. Based on the concept of Binary Search.
 * @param {array} numbers - An array of numbers.
 * @param {number} target - The given target number.
 */

/* Binary Search
- ONLY works with Sorted Arrays
- Dividing and Conquering
  1. Define a midpoint from the element in the middle of the array (Divide), to see if our target value is greater than or less than the or midpoint  
  2. Depending on if the target value is greater than or less than the middleIndex, we can remove the left or right of our array from our search (Conquer).
*/

function binarySearchPosition(numbers, target) {
  // Initialize 3 variables: lowIndex, highIndex and middleIndex.
  let lowIndex = 0
  let highIndex = numbers.length - 1
  let middleIndex

  while (lowIndex < highIndex) {
    middleIndex = parseInt((lowIndex + highIndex) / 2)

    // If numbers[middleIndex] is equal to the target, then return middleIndex(since we require the position only).
    // If numbers[middleIndex] is greater than the target, adjust the highIndex; if numbers[middleIndex] is less than the target, adjust the lowIndex
    if (numbers[middleIndex] === target) {
      return middleIndex
    } else if (numbers[middleIndex] > target) {
      highIndex = middleIndex - 1
    } else if (numbers[middleIndex] < target) {
      lowIndex = middleIndex + 1
    }
  }

  // If the target is not in the given array, return -1
  return -1
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)) // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 2)) // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 5)) // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)) // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 7)) // should print 3
