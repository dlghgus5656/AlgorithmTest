function solution(arr, n) {
    const isEven = arr.length % 2 === 0;

    // 짝수면 홀수, 홀수면 짝수에 +
    return arr.map((num, i) => ((isEven ? i % 2 !== 0 : i % 2 === 0) ? num + n : num));
}
