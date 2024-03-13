Array.prototype.myFind = function (func) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (func(element)) {
        return element
    }
  }
  return undefined
};

const a = [1, 2,3];
console.log(a.myFind((element)=>element%3===0));
