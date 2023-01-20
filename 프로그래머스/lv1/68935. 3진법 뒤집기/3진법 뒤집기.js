function solution(n) {
    const reverseString = n.toString(3).split('').reverse().join('');
    return parseInt(reverseString,3)
}