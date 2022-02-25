function sortArrayBy2Criteria(arr) {
    let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join(`\n`));
}
sortArrayBy2Criteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])