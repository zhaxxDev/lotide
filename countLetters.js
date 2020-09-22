// const assertEqual = function(actual, expected) {
//   if (actual === expected){
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//   }
// };

function countLetters(strArray){
  const results = {};
  for (let char of strArray) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  } return results 
};
// console.log(countLetters("holy moly this assignment was e, the quick brown fox jumps over the lazy dog"));

module.exports = countLetters;