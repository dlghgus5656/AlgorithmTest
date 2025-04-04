function solution(num_str) {
    const answer = num_str.split("").reduce((acc, cur) => {
        return Number(acc) + Number(cur)
    }, 0);
    return answer;
}