const map = function(arg1, arg2){
  let yee = []
  for (let i of arg1){
    yee.push(arg2(i))
  }
  return yee;
}
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;