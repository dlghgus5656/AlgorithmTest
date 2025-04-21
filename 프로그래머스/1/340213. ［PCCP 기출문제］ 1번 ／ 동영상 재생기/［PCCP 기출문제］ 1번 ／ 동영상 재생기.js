function solution(video_len, pos, op_start, op_end, commands) {
    const video_lenSeconds = (Number(video_len.slice(0,2)) * 60)  + Number(video_len.slice(3,5)) // 영상 시간
    const op_startSeconds = (Number(op_start.slice(0,2)) * 60)  + Number(op_start.slice(3,5)) // 오프닝 시작
    const op_endSeconds = (Number(op_end.slice(0,2)) * 60)  + Number(op_end.slice(3,5)) // 오프닝 끝

    let posSeconds = (Number(pos.slice(0,2)) * 60)  + Number(pos.slice(3,5))

    if (op_startSeconds <= posSeconds && posSeconds <= op_endSeconds) posSeconds = op_endSeconds
    
    for (const com of commands) {
        switch (com) {
            case "next" :
                if (video_lenSeconds - posSeconds < 10) { // 남은 영상의 길이가 10초 미만일때
                    posSeconds = video_lenSeconds
                }
               else {
                    posSeconds += 10
                }
                break;
            case "prev" :
                if (posSeconds < 10) { // 현재 위치 10초 미만일때
                    posSeconds = 0
                } else {
                    posSeconds -= 10
                }
                break;
            
            default : break;
        }
        //         if (com === "next") {
//              if (video_lenSeconds - posSeconds < 10) { // 남은 영상의 길이가 10초 미만일때
//                     posSeconds = video_lenSeconds
//                 }
//               else {
//                     posSeconds += 10
//                 }
//         }
//             else if (com === "prev"){
//                  if (posSeconds < 10) {
//                     posSeconds = 0
//                 } else {
//                     posSeconds -= 10
//                 }
//             }
        
//           if (op_startSeconds <= posSeconds && posSeconds <= op_endSeconds) {
//                     posSeconds = op_endSeconds
//                 } 
        if (op_startSeconds <= posSeconds && posSeconds <= op_endSeconds) {
                    posSeconds = op_endSeconds
                } 
    }
    
    const resultMin = String(Math.floor(posSeconds / 60)).padStart(2,"0")
    const resultSec = String(posSeconds % 60).padStart(2,"0")
            
    return  `${resultMin}:${resultSec}`
}