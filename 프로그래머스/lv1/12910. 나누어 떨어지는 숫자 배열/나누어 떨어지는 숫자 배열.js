function solution(arr, divisor) {
    const elements = arr.filter((el)=> el%divisor === 0);
    return elements.length > 0 ? elements.sort((a,b)=> a-b) : [-1];
}