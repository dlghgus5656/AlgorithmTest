function solution(players, m, k) {
    var answer = 0;
    
    let nowSever = new Map();
    let sumSever = 0;
    
    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        
        if (nowSever.has(i)) nowSever.delete(i) // 종료 시작 서버 제거
        
        const nowSeverSize = [...nowSever.values()].reduce((a, b) => a + b, 0); // 현재 증설된 서버의 수

        
        if (player >= m) {
            const severOn = Math.trunc(player / m) - nowSeverSize // 증설해야할 서버 수 음수면 새로 증설 x
            if (severOn > 0) {
                nowSever.set(i + k,  severOn) //종료시각을 키값 : 증설된 서버 수 벨류값
                sumSever += severOn // 누적 증설 횟수
            }
        }
    }
    return sumSever;
}
