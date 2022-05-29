class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(num) {
        if (typeof num == 'number') {
            this.list.push(num);
            this.list.sort((a, b) => a - b);
            this.size++;
        } else {
            throw new Error ('Input is not a number');
        }
    };
    remove(i){
        if (typeof i != 'number'){
            throw new Error ('Input is not a number');
        } else if (this.list[i] == undefined){
            throw new Error ('Input is out of array range');
        } else {
            this.list.splice(i,1);
            this.size--;
        }
    };
    get(i) {
        if (typeof i != 'number'){
            throw new Error ('Input is not a number');
        } else if (this.list[i] == undefined){
            throw new Error ('Input is out of array range');
        } else {
            return this.list[i];
        }
    };

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));