// 오늘 날짜를 총 일수로 변환 (모든 달 28일로 가정)
function convertToDays(dateStr) {
// dateStr 형식: "YYYY.MM.DD"
const [year, month, day] = dateStr.split('.').map(Number);
    
return (year * 12 * 28) + (month * 28) + day;
}

function solution(today, terms, privacies) {
    
// 오늘 날짜를 총 일수로 변환
const todayTotalDays = convertToDays(today);

// terms 배열을 이용하여 타입별 유효기간(달)을 저장하는 맵 생성
const termsMap = {};
for (let term of terms) {
    const [type, duration] = term.split(" ");
    termsMap[type] = Number(duration);
}

const result = [];

// privacies 배열을 순회하며 각 개인정보의 만료 여부를 확인
privacies.forEach((privacy, index) => {
    const [dateStr, termType] = privacy.split(" ");
    // 개인정보 수집 일자를 총 일수로 변환
    const collectionTotalDays = convertToDays(dateStr);
    // 해당 약관의 유효기간을 일수로 변환 (달 * 28일)
    const validDays = termsMap[termType] * 28;
    // 보관 가능 마지막 날짜: 수집한 날 + 유효기간(일수) - 1
    const expirationTotalDays = collectionTotalDays + validDays - 1;
  
    // 오늘이 유효기간을 초과했다면 파기 대상
    if (todayTotalDays > expirationTotalDays) {
        result.push(index + 1);  // 개인정보 번호는 1번부터 시작하므로 인덱스 + 1
    }
});

// 결과 배열은 오름차순 정렬 후 반환
return result.sort((a, b) => a - b);
}
