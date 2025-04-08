function solution(myString) {
    var answer = [...myString].map((str) => str.charCodeAt() < "l".charCodeAt() ? "l" : str ).join("");
    return answer;
}