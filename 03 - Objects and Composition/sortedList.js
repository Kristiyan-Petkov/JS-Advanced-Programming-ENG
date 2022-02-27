function createSortedList() {
    let obj = {
        numbers: [],
        add: function add(num) {
            this.numbers.push(num);
            this.numbers = this.numbers.sort((a, b) => a - b);
            this.size += 1
        },
        get: function get(index) {
            if (this.numbers[index] != undefined) {
                return this.numbers[index];
            }
        },
        remove: function remove(index) {
            if (this.numbers[index] != undefined) {
                this.numbers.splice(index, 1);
                this.size -= 1
            }
        },
        size: 0
    }
    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(-5));
list.remove(1);
console.log(list.get(1));
console.log(list);
console.log(list['size']);