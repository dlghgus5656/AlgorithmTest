// function solution(board, k) {
//     let sum = 0;
    
//     for(let i = 0; i < board.length; i++) {
//         for(let j = 0; j < board[i].length; j++) {
//             if(i + j <= k) sum += board[i][j]
//         }
//     }
    
//     return sum;
// }

function solution(board, k) {
    let sum = 0;
    const rowCount = board.length;
    const colCount = board[0].length;

    for (let i = 0; i < rowCount; i++) {
        const maxJ = Math.min(colCount - 1, k - i);
        for (let j = 0; j <= maxJ; j++) {
            sum += board[i][j];
        }
    }

    return sum;
}
