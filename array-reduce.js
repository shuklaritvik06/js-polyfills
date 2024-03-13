Array.prototype.myReduce = function(func, acc){
    let value = acc;
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        newArr.push(func(element));
    }
    return newArr
}
const a = [1,2,4]
a.reduce
console.log()