function letterPositions(sentence) {
  const results = {};
  let i = 0;
  for (let chr of sentence) {
    if (chr !== ' ') {
      if (results[chr]) {
        results[chr].push(i);
      } else {
        results[chr] = [i];
      }
    }
    i++;
  }
  return results;
};
// console.log(letterPositions('lighthouse in the house'));
module.exports = letterPositions;