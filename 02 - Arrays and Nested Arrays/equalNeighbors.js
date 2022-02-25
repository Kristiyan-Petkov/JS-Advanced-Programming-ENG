function equalNeighbors(matrix){
    let counter = 0;
    for (let i = 0; i < matrix.length; i++){
    // check if equal neighbors in row
        let row = matrix[i];
        let neighborOnRow;
        for (let entry of row){
            if (entry == neighborOnRow){
                counter++;
            }
            neighborOnRow = entry;
        }

    // check if equal neighbors in column
        let col = [];
        let neighborOnCol;
        for (let j = 0; j < matrix.length; j++){
            col.push(matrix[j][i]);
            if (matrix[j][i] == neighborOnCol){
                counter++;
            }
            neighborOnCol = matrix[j][i];
        }
    }
    console.log(counter);
}
equalNeighbors([
    ['2', '3', '4', '7', '7'],
    ['4', '0', '5', '7', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '5']])