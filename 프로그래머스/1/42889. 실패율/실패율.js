function solution(N, stages) {
    const stageCounts = Array(N + 2).fill(0); // 스테이지별 사람 수
    for (const stage of stages) {
        stageCounts[stage]++;
    }

    const failureRates = []; // 스테이지번호 : 실패율
    let remainingPlayers = stages.length; // 아직 사용중인 수

    for (let stage = 1; stage <= N; stage++) {
        const failures = stageCounts[stage]; // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
        const totalReached = remainingPlayers; // 스테이지에 도달한 플레이어 수
        const rate = totalReached === 0 ? 0 : failures / totalReached; // 실패율
        failureRates.push([stage, rate]);
        remainingPlayers -= failures; // 다음 스테이지로 넘어간 인원만 남김
    }

    return failureRates
        .sort((a, b) => b[1] - a[1] || a[0] - b[0]) // 실패율 내림차순, 실패율 같으면 스테이지 번호 오름차순
        .map(([stage]) => stage);
}

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 실패율이 높은 스테이지부터 내림차순
