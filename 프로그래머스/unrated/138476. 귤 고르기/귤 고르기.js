function solution(k, tangerine) {
    let result = 0;
    const sizeCounts = tangerine.reduce((acc,cur)=>{
                            acc[cur-1] = (acc[cur-1] || 0) + 1;
                            return acc;
                        },[]).filter(el => el);
    sizeCounts.sort((a,b)=>a-b);
    
    while(k > 0){
        result++;
        
        const countBigger = sizeCounts.pop();        
        if(k < countBigger) { break };
        k -= countBigger;
    }
    
    return result;
}