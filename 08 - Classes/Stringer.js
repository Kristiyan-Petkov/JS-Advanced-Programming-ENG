class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        Stringer.prototype.toString = function () {
                if (this.innerLength == 0){
                    return '...'
                } else if (this.innerLength < this.innerString.length){
                    let chars = this.innerLength - 1;
                    let newStr = Object.values({...this.innerString}).join('');
                    return newStr.slice(0,chars + 1) + '...';
                } else {
                    return this.innerString;
                }
            };
    }
    decrease(n){
        if (n >= this.innerLength){
            this.innerLength = 0;
        } else {
            this.innerLength -= n;
        }
    };
    increase(n){
        this.innerLength += n;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4); 
console.log(test.toString()); // Test
