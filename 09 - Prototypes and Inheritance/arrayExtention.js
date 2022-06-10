(function arrayExtention() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        const newArr = [];
        for (let i = n; i < this.length; i++){
            newArr.push(this[i]);
        }
        return newArr;
    };
    Array.prototype.take = function (n) {
        const newArr = [];
        for (let i = 0; i < n; i++){
            newArr.push(this[i]);
        }
        return newArr;
    };
    Array.prototype.sum = function () {
        const sum = 0;
        for (let i = 0; i < this.length; i++){
            sum += this[i];
        }
        return sum;
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})()