function solution(s) {
    let zeroCount = 0, repeatCount = 0;
    
    while(s !== '1'){
        repeatCount++;
        
        const count = s.split('').filter(el=>el==="0").length
        zeroCount += count;
        
        s = (s.length-count).toString(2);
    }
    
    return [repeatCount, zeroCount]
}