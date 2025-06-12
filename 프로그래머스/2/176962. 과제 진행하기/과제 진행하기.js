function solution(plans) {
  function toMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }

  // 시작 시간 기준 정렬
  plans.sort((a, b) => toMinutes(a[1]) - toMinutes(b[1]));

  const result = [];
  const paused = [];

  for (let i = 0; i < plans.length; i++) {
    const [name, start, duration] = plans[i];
    const curStart = toMinutes(start);
    const curDuration = Number(duration);
    const nextStart = i < plans.length - 1 ? toMinutes(plans[i + 1][1]) : Infinity;

    let timeLeft = nextStart - curStart;
    let remainingTime = curDuration;

    if (timeLeft >= remainingTime) {
      result.push(name);
      timeLeft -= remainingTime;

      // 중단된 과제 이어서 수행
      while (paused.length && timeLeft > 0) {
        const [pausedName, pausedTime] = paused.pop();
        if (timeLeft >= pausedTime) {
          result.push(pausedName);
          timeLeft -= pausedTime;
        } else {
          paused.push([pausedName, pausedTime - timeLeft]);
          break;
        }
      }
    } else {
      paused.push([name, remainingTime - timeLeft]);
    }
  }

  // 남은 과제 처리
  while (paused.length) {
    result.push(paused.pop()[0]);
  }

  return result;
}
