function solution(t, p) {
    const sliceT = t;
    const pLength = p.length
    const numP = Number(p)
    
    let sliceCount = pLength
    let count = 0
    
    for (let i = 0; sliceT.slice(i).length >= pLength; i++) {
        const stt = Number(sliceT.slice(i, sliceCount))
        if (stt <= numP) count++
        sliceCount++
    }
    
    
    return count;
}