function solution(friends, gifts) {
    const length = friends.length
    
    const giftLog = {}; // 선물 주고받은 기록
    
    const giveCount = {}; // 각 친구마다 준 선물 총 개수
    
    const getCount = {}; // 각 친구마다 받은 선물 총 개수
    
    const nextGifts = {}; // 다음달 선물 받는 개수
    
    
    // 초기화
     for (const name of friends) {
        giftLog[name] = {};
        giveCount[name] = 0;
        getCount[name] = 0;
        nextGifts[name] = 0;
    }

   // 기록 처리
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(" ");
        
        // 주고받은 선물 기록
        giftLog[giver][receiver] = (giftLog[giver][receiver] || 0) + 1;

        giveCount[giver]++;
        getCount[receiver]++;
    }
    
    // 주고받은 선물 쌍 비교
    // 다음달 받을 선물 추가
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            const nameA = friends[i]
            const nameB = friends[j]
            
            const AtoB = giftLog[nameA][nameB] || 0
            const BtoA = giftLog[nameB][nameA] || 0
            
            if (AtoB > BtoA) {
                nextGifts[nameA]++
            }
            else if (BtoA > AtoB) {
                nextGifts[nameB]++
            } 
            else { // 선물지수 비교
                const Acount = giveCount[nameA] - getCount[nameA]
                const Bcount = giveCount[nameB] - getCount[nameB]
                if (Acount > Bcount) {
                    nextGifts[nameA]++
                }
                else if (Bcount > Acount) {
                    nextGifts[nameB]++
                }
                
            }
            
        }
    }
    return  Math.max(...Object.values(nextGifts));
}
