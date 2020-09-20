const eqArrays = require('./eqArrays')
function assertArraysEqual(array1, array2){
  if (eqArrays(array1, array2) === true){
    console.log("true")
  } else {
    console.log("false")
  }
}
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
module.exports = assertArraysEqual;