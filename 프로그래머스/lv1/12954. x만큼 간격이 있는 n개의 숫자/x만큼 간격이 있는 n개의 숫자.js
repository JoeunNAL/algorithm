function solution(x, n) {
    return new Array(n).fill(x).map((el,idx)=> el*(idx+1));
}