function solution(n) {
    let sum =0;
    for (i = 0; i*i<=n; i++){
        if(n%i !== 0) continue;
        
        sum += i;
        if(i !== n/i){
            sum += n/i;            
        }
    }
    return sum;
    
}