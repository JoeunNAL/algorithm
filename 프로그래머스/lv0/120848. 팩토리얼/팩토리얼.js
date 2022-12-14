function solution(n) {
    let factorial = 1;
    let count =0;
    while(factorial<=n){
        count++;
        factorial *= count;
    }
    return count-1
}