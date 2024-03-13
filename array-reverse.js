Array.prototype.myReverse = function () {
    for (let index = 0; index < this.length/2; index++) {
        const item = this[index];
        this[index] = this[this.length - index - 1];
        this[this.length - index - 1] = item;        
    }
    return this
}

const a = [1, 2, 3, 4];
console.log(a.myReverse());