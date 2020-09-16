function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i ++){
    if (array1[i] != array2[i]){
      return false;
    }
  }
  return true;
};

function assertArraysEqual(array1, array2){
  if (eqArrays(array1, array2) === true){
    console.log("true")
  } else {
    console.log("false")
  }
}

const without = function(array1, array2) {
  let filteredArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};