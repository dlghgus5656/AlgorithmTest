function solution(board, moves) {
    const row = board.length
    const box = []
    
    let resultSum = 0
    
    for (const move of moves) {
        const movenum = move - 1
        
        for (let i = 0; i < row; i++) {
           const doll = board[i][movenum]
           
            if (doll !== 0) { // 빈 칸이 아닐때만 실행
                board[i][movenum] = 0; // 인형 꺼냈으면 board에서 제거
                
                if (box.length && box[box.length - 1] === doll) { // 바구니 마지막 인형이 현재 인형과 같을때
                box.pop();
                resultSum += 2;
                } else { // 아니라면 바구니에 넣기
                    box.push(doll);
                }
                break; // 다음 move로 바로 이동
            }
        }
    }
    
    return resultSum;
}