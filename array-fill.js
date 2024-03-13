Array.prototype.myFill = function (value, start, end = this.length) {
  end = end > 0 ? (end >= this.length ? this.length : end) : this.length + end;
  start = start < 0 ? this.length + start : start;
  for (let index = start; index < end; index++) {
    this[index] = value;
  }
  return this;
};

const a = [1, 2, 3, 4];
console.log(a.myFill(4, -3, -2));
