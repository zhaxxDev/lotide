const eqArrays = require('./eqArrays')

const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(object1, object2){
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true){
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba)
// assertObjectsEqual(ab, ba)
module.exports = assertObjectsEqual;