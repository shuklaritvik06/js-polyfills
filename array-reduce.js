Array.prototype.myReduce = function(func, acc){
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        acc = func(acc, element)
    }
    return acc
}
const a = [1,2,4]
console.log(a.myReduce((acc, curr) => acc + curr, 0)) // 7