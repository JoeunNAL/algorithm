function solution(d, budget) {
    let result;
    d.sort((a,b)=> a-b);
    
    if(d[0]>budget){
        return 0;
    }
    
    d.reduce((acc,cur,idx)=>{
        if(acc+cur <= budget){
           result = idx;
           return acc+cur;
        };
    },0);
    
    return result+1;
};