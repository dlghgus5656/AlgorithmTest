function solution(k, score) {
    const hallOfFame = []; // 명예의 전당 배열
    const result = []; // 최하위 점수 배열

    for (let i = 0; i < score.length; i++) {
        const currentScore = score[i];

        // 새로운 점수를 명예의 전당에 추가
        hallOfFame.push(currentScore);

        // 명예의 전당 크기가 k보다 커지면 가장 낮은 점수 제거
        if (hallOfFame.length > k) {
            // 배열을 오름차순으로 정렬해서 가장 낮은 점수를 찾음
            hallOfFame.sort((a, b) => a - b); // 오름차순 정렬
            hallOfFame.shift(); // 배열의 첫 번째 요소(가장 낮은 점수) 제거
        }

        // 명예의 전당 크기가 k보다 작으면 현재까지의 최하위 점수 (배열의 최솟값)
        //    명예의 전당 크기가 k 이상이면 k번째 점수 (오름차순 정렬 후 첫 번째 요소)
     
        hallOfFame.sort((a, b) => a - b);
        result.push(hallOfFame[0]); // 정렬된 배열의 첫 번째 요소가 최하위 점수

    }

    return result;
}
