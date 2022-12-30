function solution(a, b, n) {
    let sum = 0;
    let main = n;
    while(a <= main){
        sum += Math.floor(main/a)*b;
        main = Math.floor(main/a)*b+ main%a;
    }
    return sum;
}