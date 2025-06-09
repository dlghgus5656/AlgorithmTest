function solution(k, dungeons) {
  let max = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(energy, count) {
    max = Math.max(max, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [min, cost] = dungeons[i];
      if (!visited[i] && energy >= min) {
        visited[i] = true;
        dfs(energy - cost, count + 1);
        visited[i] = false; // 백트래킹
      }
    }
  }

  dfs(k, 0);
  return max;
}