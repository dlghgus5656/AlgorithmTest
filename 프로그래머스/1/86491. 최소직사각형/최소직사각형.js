function solution(sizes) {
    const sizeSort = sizes.map((arr) => arr[0] < arr [1] ? [arr[1], arr[0]] : arr) // 가로가 더 길게 처리
    
    const maxMin = sizeSort.reduce((size, cur, i) => 
        
        // if (size[0] < cur[0])  size[0] = cur[0]
        // if (size[1] < cur[1])  size[1] = cur[1]
        [Math.max(size[0], cur[0]), Math.max(size[1], cur[1])]
        
    ,[0, 0])
    return maxMin[0] * maxMin[1];
}