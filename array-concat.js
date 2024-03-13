Array.prototype.myConcat = function (second){
    // let newArr = []
    // for (let index = 0; index < this.length; index++) {
    //     const element = this[index];
    //     newArr.push(element)
    // }
    // for (let index = 0; index < second.length; index++) {
    //     const element = second[index];
    //     newArr.push(element)
    // }
    // return newArr
    return [...this, ...second]
}

const a = [1,2]
console.log(a.myConcat([12,4,5,[3,4,5]]));