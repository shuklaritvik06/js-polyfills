Array.prototype.myFilter = function (func) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (func(element)) {
      result.push(element)
    }
  }
  return result
};

const a = [1, 2,3];
console.log(a.myFilter((element)=>element%3===0));
