function solution(progresses, speeds) {
    const answer = [];
    
    const day = [];
    
    for (let i = 0; i < progresses.length; i++) {
        let progres = progresses[i];
        const speed = speeds[i];
        
        let index = 0;
        while (progres < 100) {
            progres += speed
            index++
        }
        day.push(index)
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


// 100% 일때 배포
// 순서는 먼저 완료된 순으로 먼저 개발되지만 배포는 뒤에있는 기능이 앞에 배포될때 같이 배포 - 이 순서는 상관 없음
// 하루에 몇개의 기능이 배포되는지 수를 배열로 각 날에 배포수를 리턴

// 반복문 돌면서 프로그래스 인덱스와 스피스 인덱스를 활용해서 계속 더해준다
// 더한 값이 100이상이 되면 완료 상태
// 앞에 인덱스가 완료 상태라면 뒤에 완료된 모든 기능을 배포한다 = 배포 수를 리턴에 푸쉬