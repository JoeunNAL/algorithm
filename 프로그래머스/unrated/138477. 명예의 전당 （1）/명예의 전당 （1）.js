function solution(k, score) {
    const result =[];
    let ranks = [];
    
    for(let i = 0; i < score.length; i++){
        ranks.push(score[i]);
        ranks.sort((a,b) => b-a);
        if(i >= k){
            result.push(ranks[k-1]);
        }else{
            result.push(ranks[ranks.length-1]);        
        }
    }
    
    return result;
}