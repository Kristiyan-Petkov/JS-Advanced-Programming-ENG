function ticTacToe(moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]]

    let player = 'X'
    let win = 'none'
    let counter = 0;
    for (let move of moves) {
        let moveTokens = move.split(' ').map(Number);
        if (board[moveTokens[0]][moveTokens[1]] != false) {
            console.log('This place is already taken. Please choose another!');
        } else {
            board[moveTokens[0]][moveTokens[1]] = player;
            if (player == 'X') {
                player = 'O';
            } else {
                player = 'X';
            }
            counter++;
        }
        let winCheck = winner(board);
        if (winCheck != 'none') {
            win = winCheck;
            console.log(`Player ${winCheck} wins!`);
            console.log(board[0].join('\t'));
            console.log(board[1].join('\t'));
            console.log(board[2].join('\t'));
            return;
        }
        if (counter == 9){
            console.log('The game ended! Nobody wins :(');
            console.log(board[0].join('\t'));
            console.log(board[1].join('\t'));
            console.log(board[2].join('\t'));
            return;
        }
    }
    function winner(board) {
        let winner = 'none';
        let diagMain = [];
        let diagSecondary = [];
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            if (row[0] != false && row[0] == row[1] && row[0] == row[2]) {
                winner = row[0];
                return winner;
            }
            let col = [board[0][i], board[1][i], board[2][i]];
            if (col[0] != false && col[0] == col[1] && col[0] == col[2]) {
                winner = col[0];
                return winner;
            }
            diagMain.push(board[i][i])
            diagSecondary.push(board[i][board.length - 1 - i])
        }
        if (diagMain[0] != false && diagMain[0] == diagMain[1] && diagMain[0] == diagMain[2]) {
            winner = diagMain[0];
            return winner;
        }
        if (diagSecondary[0] != false && diagSecondary[0] == diagSecondary[1] && diagSecondary[0] == diagSecondary[2]) {
            winner = diagSecondary[0];
            return winner;
        }
        return winner
    }
}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])