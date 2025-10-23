function solution(genres, plays) {
    var answer = [];
    const map = new Map()
    
    // 장르별 곡 정리
    for (let i = 0; i < plays.length; i++) {
        const genre = genres[i]
        const play = plays[i]
        
        if(!map.has(genre)) map.set(genre, [])
        
        map.get(genre).push({id: i, plays: play})
    }

    
    // 장르별 총 재생 수 계산
      const genreTotalPlays = [];
      for (const [genre, songs] of map.entries()) {
        const total = songs.reduce((acc, cur) => acc + cur.plays, 0);
        genreTotalPlays.push({ genre, total });
      }
 
    
     genreTotalPlays.sort((a, b) => b.total - a.total)
    
     const result = [];

      // 각 장르별 상위 2곡 선택
      for (const { genre } of genreTotalPlays) {
        const songs = map.get(genre);
        // 재생 수 내림차순, 같으면 id 오름차순
        songs.sort((a, b) => {
          if (b.plays === a.plays) return a.id - b.id;
          return b.plays - a.plays;
        });

        // 상위 두 곡까지 추가
        const topSongs = songs.slice(0, 2);
        for (const s of topSongs) {
          result.push(s.id);
        }
      }
    return result;
}
