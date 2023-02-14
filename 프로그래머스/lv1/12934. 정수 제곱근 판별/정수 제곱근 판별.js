function solution(n) {
    const rootValue = Math.sqrt(n);
    return rootValue % 1 === 0 ? ( rootValue + 1 )**2 : -1;
}