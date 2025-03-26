function solution(str1, str2) {
    let arrStr1 = str1.split('')
    let arrStr2 = str2.split('')

    var answer = arrStr1.map((arr, i) => arr + arrStr2[i]).join('');
    
    return answer;
}