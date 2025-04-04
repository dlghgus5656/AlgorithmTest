function solution(arrs, delete_list) {
   
    return arrs.filter((arr) => !delete_list.includes(arr));
}