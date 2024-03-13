Array.prototype.myPop = function(){
    if (this.length === 0) return undefined
    const item = this[this.length-1]
    this.length = this.length-1
    return item
}
const a = [1,2,4]
console.log(a.myPop()) 
console.log(a)
console.log(a.myPop())
console.log(a)
console.log(a.myPop())
console.log(a)
console.log(a.myPop()) 
console.log(a)