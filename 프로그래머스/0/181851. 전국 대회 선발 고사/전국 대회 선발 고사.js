function solution(rank, attendance) {
    const filterRank = rank.filter((num, i) => attendance[i]).sort((a,b) => a - b).slice(0,3);
    
    const numArr = filterRank.map((arr) => rank.findIndex(num => num === arr))
        
    
    return (10000 * numArr[0]) + (100 * numArr[1]) + numArr[2];
}