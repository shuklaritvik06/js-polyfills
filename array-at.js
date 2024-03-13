Array.prototype.myAt = function (index) {
  if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
};

const a = [1, 2, 3];
console.log(a.myAt(0));
console.log(a.myAt(-1));
console.log(a.myAt(-2));
