// function solution(n, m, section) {
//     let count = 0;    // 최소 롤러 횟수
//     let index = 0;    // section에서 아직 칠하지 않은 첫 위치

//     while (index < section.length) {
//         console.log(index)
//         const start = section[index];  // 현재 칠해야 할 시작점
//         const end = start + m - 1;     // 현재 롤러로 덮을 끝 점

//         count++;                       // 롤러 한 번 사용 + 1

//         // 롤러로 덮은 영역의 다음 칠해야 할 지점까지 스킵
//         while (index < section.length && section[index] <= end) {
//             index++;
//         }
//     }

//     return count;
// }
function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}