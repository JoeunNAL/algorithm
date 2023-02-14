function solution(n) {
    // const rootValue = Math.sqrt(n);
    // return rootValue % 1 === 0 ? ( rootValue + 1 )**2 : -1;

    let num = 1, result = -1;
    
    while(num*num <= n){
        if(num*num === n) {
            result = (num+1)*(num+1);
            break;
        }
        num++;
    }
    return result;
}