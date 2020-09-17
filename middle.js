function middle(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

console.log(middle([1, 2, 3,3, 4])) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
