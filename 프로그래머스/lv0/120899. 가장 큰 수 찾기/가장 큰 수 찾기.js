function solution(array) {
    const maxValue = Math.max(...array);
    const bigValueIdx = array.findIndex((num)=>num === maxValue)
    return [maxValue, bigValueIdx]
}