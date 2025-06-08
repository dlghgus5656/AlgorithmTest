function solution(brown, yellow) {
  const y = [];

  // yellow의 약수쌍을 구함
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      y.push([yellow / i, i]);
    }
  }

  // 각 약수쌍에 대해 가로와 세로를 계산하고 조건에 맞는지 확인
  for (const [widthInner, heightInner] of y) {
    const width = widthInner + 2;
    const height = heightInner + 2;
    const area = width * height;

    if (area === brown + yellow) {
      return [width, height];
    }
  }
}
