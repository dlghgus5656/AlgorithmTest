function solution(players, m, k) {
    var answer = 0;
    
    let nowSever = new Map();
    let sumSever = 0;
    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        
        if (nowSever.has(i)) nowSever.delete(i)
        
        const nowSeverSize = [...nowSever.values()].reduce((a, b) => a + b, 0);

        
        if (player >= m) {
            const severOn = Math.trunc(player / m) - nowSeverSize
            if (severOn > 0) {
                nowSever.set(i + k,  severOn)
                sumSever += severOn
            }
        }
    }
    return sumSever;
}
