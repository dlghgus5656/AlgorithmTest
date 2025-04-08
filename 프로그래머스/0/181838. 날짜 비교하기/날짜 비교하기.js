function solution(date1, date2) {
    for (let i = 0; i < 3; i++) {
        if (date1[i] < date2[i]) return 1;
        if (date1[i] > date2[i]) return 0;
    }
    return 0;
}
// function solution(date1, date2) {
//     const d1 = new Date(date1[0], date1[1] - 1, date1[2]);
//     const d2 = new Date(date2[0], date2[1] - 1, date2[2]);
//     return d1 < d2 ? 1 : 0;
// }
