function solution(survey, choices) {
     const MBTI = {};
    const types = ["RT", "CF", "JM", "AN"];
    var answer = ''
   types.forEach( (type) => type.split('').forEach ((char) => MBTI[char] = 0));

    choices.forEach((choice, index) => {
        // 스펠링 하나씩 np, yes에 저장됨
        // 출력 〉    [ 'A', 'N' ]
        //         [ 'C', 'F' ]
        //         [ 'M', 'J' ]
        //         [ 'R', 'T' ]
        //         [ 'N', 'A' ]
        const [no, yes] = survey[index];
        // MBTI에 저장되어 있는 각 유형들의 값이 4보다 크다면 동의쪽 아니라면 비동의쪽으로 나눔
        // 그 후 choice값에 -4를 해줘 1,2,3점 중에 값이 들어가게 하는데 음수로 들어가는것을 방지하기위해
        // Math.abs를 사용해서 절대값으로 무조건 양수로 값이 들어가게 해준다.
        MBTI[choice > 4 ? yes : no] += Math.abs(choice - 4);
    })
    answer = types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("")
    return answer;
}

