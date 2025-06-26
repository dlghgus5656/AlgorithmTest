// function solution(s) {
//     const map = new Map([
//         ["zero", 0], // 키-값 쌍의 배열
//         ["one", 1],
//         ["two", 2],
//         ["three", 3],
//         ["four", 4],
//         ["five", 5],
//         ["six", 6],
//         ["seven", 7],
//         ["eight", 8],
//         ["nine", 9],
//     ]);
    
//     let answer = [];
//     let word = ""
    
//     for (const abc of s) {
        
//         if (Number(abc) || abc === "0") {
//             answer.push(abc)
//         } 
//         else {
//             word += abc
//         }

//         if (map.has(word)) {
//             answer.push(map.get(word))
//             word = ""
//         }
        
//     }

//     return Number(answer.join(""));
// }
function solution(s) {
  const map = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const [word, digit] of Object.entries(map)) {
    s = s.replaceAll(word, digit);
  }

  return Number(s);
}