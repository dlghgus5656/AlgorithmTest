const toMinutes = (time) => { // 분누적 변환
  const [HH, MM] = time.split(":").map(Number);
  return HH * 60 + MM;
};

function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;

  const inCar = new Map(); // 입차 기록
  const totalTime = new Map(); // 차량번호별 누적 주차시간

  for (const record of records) {
    const [curTime, carNum, type] = record.split(" ");
    const minutes = toMinutes(curTime);

    if (type === "IN") { // 입차
      inCar.set(carNum, minutes);
    } else { // 출차
      const inTime = inCar.get(carNum);
      const duration = minutes - inTime; // 출차시각 - 입차시각
      inCar.delete(carNum); // 입차 기록 삭제

      totalTime.set(carNum, (totalTime.get(carNum) || 0) + duration); //차량별 주차시간 기록 누적
    }
  }

  // 남은 차량 → 23:59 출차 처리
  const endOfDay = toMinutes("23:59");
  for (const [carNum, inTime] of inCar) {
    const duration = endOfDay - inTime;
    totalTime.set(carNum, (totalTime.get(carNum) || 0) + duration);
  }

  // 요금 계산
  const answer = [...totalTime.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0])) // 차량번호 오름차순 정렬
    .map(([carNum, time]) => {
      if (time <= basicTime) return basicFee;
      return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee; 
        // 기본 요금 + ((총 주차시간 - 기본 시간) / 단위 시간) * 단위 요금 -> 결과 올림 처리
    });

  return answer;
}
