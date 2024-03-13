Array.prototype.myReduceRight = function(func, acc){
    for (let index = this.length-1; index>=0; index--) {
        const element = this[index];
        acc = func(acc, element)
    }
    return acc
}
const a = [1,2,4]
console.log(a.myReduceRight((acc, curr) => acc + curr, 0))