function solution(s) {
    const midStart = Math.floor(s.length/2);
    return s.length%2 === 0 ? s[midStart-1]+s[midStart] : s[midStart];
}