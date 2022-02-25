function stringLength(one,two,three){
    let sum = one.length + two.length + three.length;
    let average = sum / 3;

    console.log(sum);
    console.log(average.toFixed(0));
}
stringLength('chocolate', 'ice cream', 'cake')