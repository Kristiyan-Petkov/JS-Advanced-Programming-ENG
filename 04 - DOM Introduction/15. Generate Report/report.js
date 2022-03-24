function generateReport() {

    //define table parameters - cols & rows
    let columnsExport = document.querySelectorAll(`body > main > table > thead > tr > th`);
    let columnsFullList = []
    let columnsArr = Array.from(columnsExport);

    for (let col of columnsArr) {
        let colTxt = col.textContent;
        let colConstructor = [];
        let counter = 0;
        let split = colTxt.split(' ');
        for (let i = 0; i < split.length - 1; i++) {
            if (counter == 0) {
                colConstructor.push(split[i].toLowerCase())
                counter++;
            } else {
                let first = split[i][0].toUpperCase();
                let rest = split[i].slice(1).toLowerCase();
                colConstructor.push(first + rest);
            }
        }
        columnsFullList.push(colConstructor.join(''));
    }

    let rowsExport = document.querySelectorAll(`body > main > table > tbody > tr`);
    let rowsArr = Array.from(rowsExport);


    // Identifying the columns to export
    let columnsToExport = []
    for (let i = 1; i <= columnsFullList.length; i++) {
        let selection = document.querySelector(`body > main > table > thead > tr > th:nth-child(${i}) > input`).checked;
        if (selection) {
            columnsToExport.push(i)
        }
    }

    // exporting the columns and storing results
    let employees = [];
    for (let j = 1; j <= rowsArr.length; j++) {
        let employeeObj = {};
        let row = document.querySelector(`body > main > table > tbody > tr:nth-child(${j})`).textContent;
        let tokens = row.split('\n').map(a => a.trim());
        for (let k = 0; k < columnsToExport.length; k++) {
            let column = columnsFullList[columnsToExport[k] - 1];
            let value = tokens[columnsToExport[k]];
            employeeObj[column] = value;
        }
        employees.push(employeeObj);
    }

    //push result to browser
    let result = JSON.stringify(employees);
    let output = document.getElementById("output")
    output.innerHTML = result;
}