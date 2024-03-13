Array.prototype.myJoin = function (sep = ",") {
  let result = "";
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result += element + (index === this.length - 1 ? "" : sep);
  }
  return result;
};

const a = [1, 2, 3, 4];
console.log(a.myJoin(","));
