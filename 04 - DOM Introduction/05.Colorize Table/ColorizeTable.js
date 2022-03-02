function colorize() {
    let evenRows = document.querySelectorAll('table tr:nth-child(even)');
    for (let row of evenRows){
        row.style.background = 'teal'
    }
}