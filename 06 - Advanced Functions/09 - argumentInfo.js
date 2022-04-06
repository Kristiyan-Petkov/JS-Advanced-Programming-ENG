var output = [];
argumentInfo({ name: 'bob'}, 3.333, 9.999);

function argumentInfo(arg){
    var output = {};
    let type = typeof arg;
    console.log(`${type}: ${arg}`);
    if (output[type] == undefined){
        output[type] = 1;
    } else {
        output[type] += 1;
    }
    output = [];
    let outputSorted = Object.entries(output).sort((a,b) => b[1] - a[1]);
    for (let [key, value] of outputSorted){
        output.push(`${key} = ${value}`);
        console.log(`${key} = ${value}`);
    }
}