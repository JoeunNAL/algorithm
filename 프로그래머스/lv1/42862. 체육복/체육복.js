function solution(n, lost, reserve) {
    lost.sort((a,b)=> a-b);
    reserve.sort((a,b) => a-b);
    
    // 여분 있는 사람이 잊어버린 경우 제외
    const restLost = lost.filter(el => {
        if(reserve.indexOf(el) !== -1){
            reserve.splice(reserve.indexOf(el), 1);
            return false;
        } else{
            return true;        
        }
    });
    
    const outCount = restLost.reduce((acc, cur, idx) => {
        if(reserve.indexOf(cur-1) === -1 && reserve.indexOf(cur+1) === -1){
            return acc+1;
        };
        
        const index = reserve.indexOf(cur-1) !== -1 ? 
              reserve.indexOf(cur-1) : reserve.indexOf(cur+1);
        reserve.splice(index, 1);
        
        return acc;
    }, 0);
    
    return n-outCount;
}