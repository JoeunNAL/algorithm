function solution(k, tangerine) {
    let result = 0;
    const sizeCount = tangerine.reduce((acc,cur)=>{
        if(!acc[cur-1]) {
            acc[cur-1] = 1;
        } else {
            acc[cur-1] += 1;
        }
        return acc;
    },[]);
    
    // 있는 크기만 분류
    const Counts = sizeCount.filter(el => el).sort((a,b)=>a-b);
    
    while(k > 0){
        result++;
        const countBigger = Counts.pop();        
        if(k < countBigger){
            k=0;
            break; 
        } else {
            k -= countBigger;
        }
    }
    return result;
}