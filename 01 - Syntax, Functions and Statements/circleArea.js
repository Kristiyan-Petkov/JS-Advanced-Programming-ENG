function circleArea(num){
    if (typeof(num) === 'number'){
        let area = Math.PI*(num**2)
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(num)}.`);
    }
}
circleArea(5)
console.log('--------------');
circleArea('word')