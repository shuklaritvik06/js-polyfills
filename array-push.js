Array.prototype.myPush = function(element){
    this.length =this.length+1
    this[this.length-1] = element
    return this.length
}
const a = [1,2,4]
console.log(a.myPush(5)) // 4;