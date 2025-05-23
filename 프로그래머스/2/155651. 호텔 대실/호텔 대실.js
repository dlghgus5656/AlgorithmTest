function solution(book_time) {
  // 시간 → 분으로 변환
  function toMinutes(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  }

  // 청소시간 포함 퇴실 시간 기준 정렬
  const bookings = book_time.map(([start, end]) => [toMinutes(start), toMinutes(end) + 10]);
  bookings.sort((a, b) => a[0] - b[0]); // 시작 시간 순 정렬

  const rooms = []; // 각 방의 "가장 마지막 퇴실+청소 시간"

  for (const [start, end] of bookings) {
    let assigned = false; // 현재 방 사용 체크

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) {
        rooms[i] = end; // 해당 방 재사용
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      rooms.push(end); // 새 방 필요
    }
  }

  return rooms.length;
}
