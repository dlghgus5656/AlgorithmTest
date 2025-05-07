function solution(keymap, targets) {
    const charMap = new Map();

    // 1. 문자별 최소 입력 횟수 맵핑
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const pressCount = i + 1;
            if (!charMap.has(char) || charMap.get(char) > pressCount) {
                charMap.set(char, pressCount);
            }
        }
    }

    // 2. 각 target에 대해 누름 수 계산
    const result = targets.map(target => {
        let total = 0;
        for (const char of target) {
            if (!charMap.has(char)) return -1; // 작성 불가
            total += charMap.get(char);
        }
        return total;
    });

    return result;
}
