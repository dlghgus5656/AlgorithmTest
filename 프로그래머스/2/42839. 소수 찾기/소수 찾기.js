function solution(numbers) {
  // 문자열을 배열로 분리하여 각 자릿수로 나눔
  const digits = numbers.split("");
  const nums = new Set(); // 중복 제거를 위한 Set

  // 순열을 생성하는 재귀 함수
  const permute = (prefix, rest) => {
    if (prefix) nums.add(Number(prefix)); // 접두사가 있으면 숫자로 변환하여 Set에 추가
    for (let i = 0; i < rest.length; i++) {
      // 현재 숫자를 prefix에 추가하고 나머지로 재귀 호출
      permute(prefix + rest[i], rest.slice(0, i).concat(rest.slice(i + 1)));
    }
  };

  permute("", digits); // 순열 생성 시작

  // 소수 판별 함수
  const isPrime = (n) => {
    if (n < 2) return false; // 2 미만은 소수 아님
    if (n === 2) return true; // 2는 소수
    if (n % 2 === 0) return false; // 짝수는 소수 아님
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false; // 나누어 떨어지면 소수 아님
    }
    return true; // 위 조건을 모두 통과하면 소수
  };

  // 소수만 필터링하고 개수 반환
  return [...nums].filter(isPrime).length;
}
