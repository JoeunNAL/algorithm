function solution(d, budget) {
    d.sort((a,b)=> a-b);
    
    return d.reduce((count,cur,idx)=>{
        return count + Number((budget-=cur) >= 0) ;
    },0);
};