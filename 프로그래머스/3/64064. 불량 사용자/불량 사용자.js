function solution(user_id, banned_id) {
  const filterUser = (user, banned) => {
    if (user.length !== banned.length) return false;

    for (let i = 0; i < user.length; i++) {
      if (banned[i] === "*") continue; // *는 어떤 문자든 통과
      if (user[i] !== banned[i]) return false;
    }
    return true;
  };

  const getBannedId = (user_id, banned) => {
    return user_id.filter(uid => filterUser(uid, banned));
  };

  // banned_id별 후보 user_id 목록 구하기
  const candidates = banned_id.map(banned => getBannedId(user_id, banned));

  const results = new Set();

  const dfs = (idx, chosen) => {
    if (idx === candidates.length) {
      // 순서와 상관없이 같은 조합은 동일하게 처리하기 위해 정렬
      results.add([...chosen].sort().join(","));
      return;
    }

    for (const uid of candidates[idx]) {
      if (!chosen.has(uid)) {
        chosen.add(uid);
        dfs(idx + 1, chosen);
        chosen.delete(uid); // 백트래킹
      }
    }
  };

  dfs(0, new Set());

  return results.size;
}
