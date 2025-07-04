function solution(s) {
    const answer = []
    const check = new Set(); // 큰 입력 대비 Set
    const groups = s.slice(2, -2).split("},{"); // 튜플 구조 -> 배열 변환
    const sarr = groups.map(item => item.split(",")).sort((a, b) => a.length - b.length); // 이중 배열구조, 배열길이 오름차순 정렬
    
    
    for (const numbers of sarr) {
        for (const num of numbers) { // answer에 포함되지 않은 수 하나씩 push
            if (!check.has(num)) { // includes보다 set.has 큰 입력 대비 성능 up
                check.add(num);
                answer.push(num);
            }
        }
    }
    
    return answer.map(Number);
}

