function squareOfStars(num){
    if (typeof(num) == 'undefined'){
        console.log(`*****\n*****\n*****\n*****\n*****`);
        return;
    } 
    let line = [];
    for (let i = 1; i <= num; i++){
        line += '*';
    }
    for (let j = 1; j <= num; j++){
        console.log(line.split('').join(' '));
    }
}
squareOfStars(4)