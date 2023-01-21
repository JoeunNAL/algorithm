function solution(t, p) {
    let result=0;
    
    for(let i = 0; i <= t.length-p.length; i++){
        const temp = t.slice(i, i+p.length);
        if(+temp > +p) continue;
        result++;
    };
    
    return result;
}