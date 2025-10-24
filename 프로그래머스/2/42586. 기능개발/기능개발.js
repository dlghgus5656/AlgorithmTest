function solution(progresses, speeds) {
    const answer = [];
    
    const day = [];
    
    // 각 작업의 완료까지 걸리는 일수 계산
    for (let i = 0; i < progresses.length; i++) { // Math.ceil(remain / speeds[i]); 수학 계산으로 구하기
        const remain = 100 - progresses[i];
        const daysNeeded = Math.ceil(remain / speeds[i]);
        day.push(daysNeeded);
    }

    
    let currentDay = day[0];
    let count = 1;
    
    for (let i = 1; i < day.length; i++) {
        if (day[i] <= currentDay) {
            count ++
        }
        else {
            answer.push(count);
            count = 1;
            currentDay = day[i]
        }
    }
    
    answer.push(count); // 마지막 카운트 추가

    return answer;
}
