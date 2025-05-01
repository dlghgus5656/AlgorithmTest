function solution(names, yearning, photo) {
    const nameZip = {} // 이름을 키로, 그리움 점수를 값으로 갖는 객체

    // 이름-점수 맵 구성
    names.forEach((name, i)=> nameZip[name] = yearning[i])
        
   const result = photo.map((arr) => {
        return arr.reduce((sum, name) => {
            return sum + (nameZip[name] || 0); // 이름이 없으면 0
        }, 0);
    });
    
    
    return result;
}