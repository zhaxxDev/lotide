const assertEqual = require('./assertEqual')
function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i ++){
    if (array1[i] != array2[i]){
      return false;
    }
  }
  return true;
};
// eqArrays([1, 2, 3], [1, 2, 3])

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
module.exports = eqArrays;