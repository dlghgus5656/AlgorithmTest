function solution(record) {
    const inText = "님이 들어왔습니다.";
    const outText = "님이 나갔습니다.";
    
    const idMap = new Map(); // 최신 이름 저장
    const result = [];

    for (const line of record) {
        const [state, id, name] = line.split(" ");
        
        if (state !== "Leave") {
            idMap.set(id, name); // 이름은 항상 최신값
        }

        if (state === "Enter") { // 입장
            result.push([id, inText]);
        } else if (state === "Leave") { // 퇴장
            result.push([id, outText]);
        }
    }

    return result.map(([id, text]) => idMap.get(id) + text); // id마다 최신 이름으로 변경
}
