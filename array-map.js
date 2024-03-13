Array.prototype.myMap = function(func){
    const newArr = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        newArr.push(func(element));
    }
    return newArr
}
const a = [1,2,4]
console.log(a.myMap((element)=>element*2))
