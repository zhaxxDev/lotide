const assertEqual = require('./assertEqual')

function findKeyByValue(genre, strToFind) {
  const genIndex = Object.keys(genre);
  let result = undefined, i = 0;
  for (let str of genIndex) {
    if (genre[genIndex[i]] === strToFind) {
      result = str;
    } else {
      i++;
    }
  } return result;
};




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;