function solution(record) {
    const newRecord = record.map(str => str.split(" "));
    
    const inText = "님이 들어왔습니다."
    const outText = "님이 나갔습니다."
    
    const idMap = new Map()
    
    let result = []
    
    for (const [state, id, name] of newRecord) {
        if (state !== "Leave") idMap.set(id, name)
        
        if (state === "Enter") {
            result.push([id, inText])
        }
        else if (state === "Leave"){
            result.push([id, outText])
          
        }
    }

    return result.map((item) => idMap.get(item[0]) + item[1]);
}