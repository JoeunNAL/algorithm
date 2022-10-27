function solution(n) {
    // 홀수 오름차순.
    const oddArr =[];
    for(let i =1; i<=n; i+=2){
        oddArr.push(i);
    }
    return oddArr;
}