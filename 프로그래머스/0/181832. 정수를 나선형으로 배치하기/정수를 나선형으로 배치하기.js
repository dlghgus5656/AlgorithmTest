function solution(n) {
const answer = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;

    while (top <= bottom && left <= right) {
        // ➡️ 좌 -> 우
        for (let i = left; i <= right; i++) {
            answer[top][i] = num++;
        }
        top++;

        // ⬇️ 위 -> 아래
        for (let i = top; i <= bottom; i++) {
            answer[i][right] = num++;
        }
        right--;

        // ⬅️ 우 -> 좌
        for (let i = right; i >= left; i--) {
            answer[bottom][i] = num++;
        }
        bottom--;

        // ⬆️ 아래 -> 위
        for (let i = bottom; i >= top; i--) {
            answer[i][left] = num++;
        }
        left++;
    }

    return answer;
}