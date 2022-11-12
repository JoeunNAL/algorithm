function solution(n) {
    const root = Math.sqrt(n);
    return root === parseInt(root)? 1: 2;
}