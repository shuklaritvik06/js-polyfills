Array.prototype.myEvery = function (predicate) {
  let success = false;
  for (let index = 0; index < this.length; index++) {
    !predicate(this[index]) ? (success = false) : (success = true);
    if (!success) {
      break;
    }
  }
  return success;
};

const a = [1, 2, 3, 4];
console.log(a.myEvery((x) => x > 0));
