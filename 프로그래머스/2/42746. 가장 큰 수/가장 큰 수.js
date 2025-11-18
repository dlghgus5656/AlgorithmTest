function solution(numbers) {
  const result = numbers
    .map(String)                      // 문자열로 변환 -> "3"+"30" = "330" 같은 비교가 가능하도록 
    .sort((a, b) => (b + a) - (a + b)) // 정렬
    .join(''); // 제한 사항 문자열 리턴

  return result[0] === '0' ? '0' : result; 
}
