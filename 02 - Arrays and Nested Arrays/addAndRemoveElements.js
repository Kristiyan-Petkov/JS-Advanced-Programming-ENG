function addAndRemoveElements(arr) {
    let newArr = [];
    counter = 0;
    for (let command of arr) {
        counter++
        if (command == 'add') {
            newArr.push(counter)
        } else {
            newArr.pop();
        }
    }
    if (newArr.length == 0){
        console.log('Empty');
    } else {
        console.log(newArr.join(`\n`));
    }
}
addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'])