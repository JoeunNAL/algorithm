function solution(n) {
    const divisor=[];
    for (i = 0; i*i<=n; i++){
        if(n%i !== 0)continue;
        divisor.push(i);
        if(i===n/i) continue;
        divisor.push(n/i);
    }
    return divisor.reduce((acc,cur)=>acc+cur,0)
    
}