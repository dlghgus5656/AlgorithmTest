function solution(picks, minerals) {
  const fatigueTable = {
    diamond: [1, 5, 25],
    iron: [1, 1, 5],
    stone: [1, 1, 1],
  };

  const maxBlocks = picks.reduce((a, b) => a + b, 0); // 곡괭이 수로 캘 수 있는 최대 블럭 수
  const blocks = [];
  for (let i = 0; i < Math.min(minerals.length, maxBlocks * 5); i += 5) {
    const block = minerals.slice(i, i + 5);
    const score = block.reduce((sum, m) => {
      if (m === 'diamond') return sum + 25;
      if (m === 'iron') return sum + 5;
      return sum + 1;
    }, 0);
    blocks.push({ block, score });
  }

  blocks.sort((a, b) => b.score - a.score); // 블록 점수 정렬, 높은 점수부터 높은 곡괭이로 처리해 최소한의 피로도를 쉽게 구하기 위함

  // 곡괭이 수에 따라 0(다이아),0(다이아),1(철),1,1,2(돌) 으로 저장
  const tools = [];
  for (let i = 0; i < picks[0]; i++) tools.push(0);
  for (let i = 0; i < picks[1]; i++) tools.push(1);
  for (let i = 0; i < picks[2]; i++) tools.push(2);

  let fatigue = 0; // 피로도 합
  for (let i = 0; i < blocks.length && i < tools.length; i++) {
    const tool = tools[i];
    const block = blocks[i].block;
      
    for (const mineral of block) {
      fatigue += fatigueTable[mineral][tool];
    }
  }

  return fatigue;
}
