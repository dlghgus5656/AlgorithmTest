function toSet(str) { // 영문자 쌍 다중집합
    const result = [];
    const s = str.toLowerCase();
    for (let i = 0; i < s.length - 1; i++) {
        const pair = s[i] + s[i + 1];
        if (/^[a-z]{2}$/.test(pair)) result.push(pair);
    }
    return result;
}

function solution(str1, str2) {
    const arr1 = toSet(str1);
    const arr2 = toSet(str2);

    const map1 = new Map();
    const map2 = new Map();
    // key: value
    for (let a of arr1) map1.set(a, (map1.get(a) || 0) + 1);
    for (let b of arr2) map2.set(b, (map2.get(b) || 0) + 1);

    let inter = 0; // 교집합
    let union = 0; // 합집합

    const allKeys = new Set([...map1.keys(), ...map2.keys()]);
    for (let key of allKeys) { // 값 누적
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        inter += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }

    return union === 0 ? 65536 : Math.trunc(inter / union * 65536); // 2. -> 공집합일 경우 1로 정의 1 * 65536 = 65536
}

// 1. 자카드 유사도(J) = |A ∩ B| / |A ∪ B|
// 2. 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의
// 3. A = {1, 1, 2, 2, 3}, 다중집합 B = {1, 2, 2, 4, 5}라고 하면, 교집합 A ∩ B = {1, 2, 2}