const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba)
// assertEqual(eqObjects(ab, ba), true) // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false) // => false