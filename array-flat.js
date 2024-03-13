Array.prototype.myFlat = function (depth = 1) {
  let result = [];
  let count = 0;
  const flatten = (arr) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (count === depth) {
        result.push(element);
      } else {
        if (Array.isArray(element)) {
          count++;
          flatten(element);
        } else {
          result.push(element);
        }
      }
    }
  };
  flatten(this);
  return result;
};

const a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(a.myFlat(Infinity)); // [1, 2, 3, 4, [5, 6]]
