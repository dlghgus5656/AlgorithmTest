function solution(id_list, report, k) {
    // 신고당한 횟수를 저장할 객체 초기화
    const reportCount = {};
    // 각 유저가 받은 메일 수를 저장할 객체 초기화
    const notificationCount = {};
    // 각 유저가 신고한 유저들을 저장할 객체 초기화
    const userReports = {};

    // id_list을 순회하며 초기값 설정
    id_list.forEach(id => {
        reportCount[id] = 0; // 신고당한 횟수 초기화
        notificationCount[id] = 0; // 메일 수 초기화
        userReports[id] = new Set(); // 신고한 유저들의 집합 초기화
    });

    // report 배열을 순회하며 신고 기록 처리
    report.forEach(entry => {
        const [reporter, reported] = entry.split(' '); // 신고자와 신고당한 유저 분리
        // 동일 유저에 대한 중복 신고 방지
        if (!userReports[reporter].has(reported)) {
            userReports[reporter].add(reported); // 신고한 유저 추가
            reportCount[reported]++; // 신고당한 횟수 증가
        }
    });

    // 신고 횟수가 k 이상인 유저를 정지 유저 목록에 추가
    const blockedUsers = new Set();
    for (const user in reportCount) {
        if (reportCount[user] >= k) {
            blockedUsers.add(user);
        }
    }

    // 각 유저가 신고한 정지 유저 수만큼 메일 발송 횟수 증가
    id_list.forEach(id => {
        userReports[id].forEach(reported => {
            if (blockedUsers.has(reported)) {
                notificationCount[id]++;
            }
        });
    });
    
    return id_list.map(id => notificationCount[id]);
}
