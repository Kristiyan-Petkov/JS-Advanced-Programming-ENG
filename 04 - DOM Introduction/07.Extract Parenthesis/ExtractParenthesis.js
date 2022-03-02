function extract(content) {
    let txt = document.getElementById(content).textContent;
    let pattern = /\((.*?)\)/g;
    let match = txt.matchAll(pattern);
    let result = [];
    for (let element of match){
        result.push(element[1]);
    }
    return result;
}