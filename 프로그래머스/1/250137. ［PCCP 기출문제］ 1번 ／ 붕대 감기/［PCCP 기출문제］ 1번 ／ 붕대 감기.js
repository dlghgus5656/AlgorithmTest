function solution(bandage, health, attacks) {
    let curHealth = health
    
    let sequenceCount = 0 // 회복 연속 성공 카운트
    
    const time = bandage[0] // 붕대감는 시간
    const recovery = bandage[1] // 회복량
    const addHealth = bandage[2] // 추가 회복량
    const endAttack = attacks[attacks.length - 1][0] // 마지막 공격 값
    
    // endAttack만큼 반복
    for (let i = 0; i <= endAttack; i++) {
       const damage = attacks.find((arr) => arr[0] === i)?.[1] ?? 0; // 현재 인덱스가 공격 시간이면 damage를 아니라면 0을 저장
 
            if (damage === 0) { // 공격 아닐때
                if (curHealth + recovery > health) { // 최대 체력 초과시
                    curHealth = health
                } else {
                    curHealth += recovery

                }
                sequenceCount++ // 연속 성공 카운트 + 1
            }
            else { // 공격 받을때
                if (curHealth - damage <= 0) return -1 // 체력 0이하 = 죽음

                curHealth -= damage
                sequenceCount = 0 // 연속 성공 초기화
            }
        // 추가 체력 회복
        if (sequenceCount === time) {
            if (curHealth + addHealth >= health) { // 최대 체력 초과시
                curHealth = health
            } else {
                curHealth += addHealth
            }
            sequenceCount = 0 // 연속 성공 초기화
        }
    }
    
    
    return curHealth;
}     