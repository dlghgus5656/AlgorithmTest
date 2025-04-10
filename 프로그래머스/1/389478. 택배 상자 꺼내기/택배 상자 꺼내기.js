function solution(n, w, num) {
    if (w === 1) return n - num + 1;

    const arr = Array.from({length: w}, () => []);
    const height = Math.trunc(n / w); // w의 수를 충족한 층의 개수
    
    for (let i = 1; i <= n; i++) {
        const r = i % w; // 현재 상자가 놓일 열의 인덱스
        
        if (!r) arr[w - 1].push(i) // r이 0인 경우, 즉 i가 w의 배수인 경우, w - 1번 열에 추가 : 열의 마지막
        else arr[r - 1].push(i); // 그렇지 않은 경우, r - 1번 열에 추가
        if (!r) arr.reverse(); // 한 층이 완성된 경우, arr 배열을 뒤집는다 : 방향이 층마다 바뀌는 것을 구현
    }
    
    if (height % 2 === 0) arr.reverse(); // arr 배열을 뒤집는다. : 마지막 층의 상자 쌓는 방향이 오른쪽에서 왼쪽인 경우를 처리하기 위함
    console.log(arr)
    for (let i = 0; i < w; i++) {
        // 현재 열에 num번 상자가 포함되어 있는지 확인
        if (arr[i].includes(num)) return arr[i].length - arr[i].indexOf(num);
        // 현재 열의 총 상자 개수에서 num번 상자의 인덱스를 뺀 값 return
    }
    
}