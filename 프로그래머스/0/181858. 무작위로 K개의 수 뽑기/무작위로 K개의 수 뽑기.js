function solution(arr, k) {
    const set = new Set();
    const result = [];

    for (const num of arr) {
        if (set.size < k && !set.has(num)) {
            set.add(num);
            result.push(num);
        }
    }

    while (result.length < k) {
        result.push(-1);
    }

    return result;
}