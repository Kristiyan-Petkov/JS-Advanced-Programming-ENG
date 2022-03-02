function sumTable() {
    let extract = document.querySelectorAll('table tr');
    let result = 0;
    for (let i = 1; i < extract.length - 1; i++){
        console.log(extract[i].lastElementChild.textContent);
        result += Number (extract[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = result;
}