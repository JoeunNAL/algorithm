function solution(d, budget) {
    d.sort((a,b)=> a-b);
    
    return d.reduce((count,current)=>{
        return count + Number((budget-=current) >= 0) ;
    },0);
};