function solution(n) {
    const result = [1];
    for(let i =2; i<=n; i++){
        (n%i === 0)? result.push(i):null;
    }
    return result;
}