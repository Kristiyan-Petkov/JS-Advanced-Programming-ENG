function result(arr) {
    let strings = [];

    let innerObj = {
        add,
        remove,
        print
    }
    for (let inst of arr) {
        let [command, txt] = inst.split(' ');

        switch (command) {
            case "add":
                innerObj.add(txt);
                break;
            case "remove":
                innerObj.remove(txt)
                break;
            case "print":
                innerObj.print();
                break;
        }
    }

    function add(str) {
        strings.push(str);
    }

    function remove(str) {
        let findRemove = strings.indexOf(str);
        strings.splice(findRemove, 1);
    }

    function print() {
        console.log(strings.join(','));
    }
}

result(['add hello', 'add again', 'remove hello', 'add again', 'print'])
console.log('---------------------------');
result(['add pesho', 'add george', 'add peter', 'remove peter','print'])