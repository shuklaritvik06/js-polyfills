Array.prototype.myUnShift = function (...elements) {
  this.length = this.length + elements.length;
  for (let index = this.length - 1; index >= 0; index--) {
    if (index < elements.length) {
      this[index] = elements[index];
    } else {
      this[index] = this[index - elements.length];
    }
  }
  return this;
};

const a = [1, 2, 3, 4];
console.log(a.myUnShift(0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10));
