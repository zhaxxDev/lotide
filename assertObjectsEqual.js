function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i ++){
    if (array1[i] != array2[i]){
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2){
  if (Object.keys(object1).length === Object.keys(object2).length){
    for(let key of Object.keys(object1) ){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
            if (!eqArrays(object1[key],object2[key])){
             return false;       
            }
        }
        
    }
    return true;
}
return false;    
};

const assertObjectsEqual = function(object1, object2){
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true){
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba)
assertObjectsEqual(ab, ba)