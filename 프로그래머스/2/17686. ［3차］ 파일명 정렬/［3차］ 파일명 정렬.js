function solution(files) {
// 문자열 파싱
  const parsed = files.map((file, index) => {
    const match = file.match(/^([a-zA-Z-.\s]+)(\d{1,5})/);
    const head = match[1]; // ^([a-zA-Z-.\s]+)
    const number = match[2]; // (\d{1,5})
    
    return {
      original: file,
      head: head.toLowerCase(), // 대소문자 구분 x
      number: parseInt(number, 10), // 앞 0 제거 및 숫자 변환
      index, // 순서 보존용 = 안정 정렬
    };
  });
  return parsed
    .sort((a, b) => {
      if (a.head !== b.head) return a.head.localeCompare(b.head); // 사전순 오름차순
      if (a.number !== b.number) return a.number - b.number; // 오름차순
      return a.index - b.index; // head, number 같다면 원래 순서 유지
    })
    .map(item => item.original);
}