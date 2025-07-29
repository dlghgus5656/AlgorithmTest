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



// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 
// 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.
// = 마지막 값이 현재 값과 같으면 둘다 제거

 // 터트려져 사라진 인형의 개수 1 카운트는 2개의 인형

// moves의 숫자는 행이 아니라 열의 위치이다 즉 (a, b) 중에 a만 증가시켜 해당 열에 위에서 아래로 내려가며 인형이 있다면 뽑으면 된다