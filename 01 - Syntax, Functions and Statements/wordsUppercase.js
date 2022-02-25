function wordsUppercase(str){
    let param = /[A-Za-z]+/g;
    let result = [];
    let data;
    while ((data = param.exec(str)) != null){
        result.push(data[0])
    }
    console.log(result.map(a => a.toUpperCase()).join(', '));
}
wordsUppercase('Hi, how are you?')