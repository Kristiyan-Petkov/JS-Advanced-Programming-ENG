function magicMatrices(matrix) {
    let isMagical = true;
    let length = matrix.length
    let target = matrix[0].reduce((a, b) => a + b);
    for (let i = 0; i < length; i++) {
        let row = matrix[i].reduce((a, b) => a + b);
        let col = 0;
        for (let j = 0; j < length; j++) {
            col += matrix[j][i];
        }
        if (col != target || row != target) {
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])