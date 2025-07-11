function solution(msg) {
    const dict = new Map();
    let dictIndex = 1;

    // A-Z 초기 사전 등록
    for (let i = 65; i <= 90; i++) {
        dict.set(String.fromCharCode(i), dictIndex++);
    }

    const result = [];
    let i = 0;

    while (i < msg.length) {
        let w = msg[i];
        let j = i + 1;

        // 사전에 존재하는 가장 긴 w 찾기
        while (j <= msg.length && dict.has(msg.slice(i, j))) {
            w = msg.slice(i, j);
            j++;
        }

        result.push(dict.get(w));  // 색인 번호 추가

        if (j <= msg.length) {
            const wc = msg.slice(i, j); // w + c
            dict.set(wc, dictIndex++);
        }

        i += w.length; // 다음 검사 시작점 갱신
    }

    return result;
}
