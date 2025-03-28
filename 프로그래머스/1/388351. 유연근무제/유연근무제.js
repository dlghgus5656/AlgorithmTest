function solution(schedules, timelogs, startday) {
    const n = schedules.length;
    let eligibleEmployees = 0;

    // 일주일 요일 배열 (1: 월 ~ 7: 일)
    const weekdays = Array.from({ length: 7 }, (_, i) => (startday + i - 1) % 7 + 1);

    for (let i = 0; i < n; i++) {
        const desiredTime = schedules[i];
        let limitTime = desiredTime + 10;
        if (limitTime % 100 >= 60) limitTime += 40; // 60분 넘어가면 시간 올림

        let isEligible = true;
        for (let j = 0; j < 7; j++) {
            if (weekdays[j] > 5) continue; // 주말 제외
            const arrival = timelogs[i][j];

            let dailyLimit = desiredTime + 10;
            if (dailyLimit % 100 >= 60) dailyLimit += 40;

            if (arrival > dailyLimit) {
                isEligible = false;
                break;
            }
        }
        if (isEligible) eligibleEmployees++;
    }

    return eligibleEmployees;
}
