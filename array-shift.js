Array.prototype.myShift = function () {
    const item = this[0];
    for (let index = 0; index < this.length - 1; index++) {
        this[index] = this[index + 1];
    }
    this.length = this.length - 1;
    return item;
}

const a = [1, 2, 3, 4];
console.log(a.myShift()); // 1