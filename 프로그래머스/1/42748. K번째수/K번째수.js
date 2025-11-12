function solution(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    const sorted = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sorted[k - 1]);
  }

  return answer;
}
