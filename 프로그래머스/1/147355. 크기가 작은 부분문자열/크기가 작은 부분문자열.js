function solution(t, p) {
    const pLength = p.length
    const numP = Number(p)
    
    let sliceCount = pLength
    let count = 0
    
    for (let i = 0; t.slice(i).length >= pLength; i++) {
        const stt = Number(t.slice(i, sliceCount))
        if (stt <= numP) count++
        sliceCount++
    }
    
    
    return count;
}