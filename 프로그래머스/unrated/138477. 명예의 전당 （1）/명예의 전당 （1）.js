function solution(k, score) {
    const result =[];
    const ranks = [];
    
    for(let i = 0; i < score.length; i++){
        ranks.push(score[i]);
        ranks.sort((a,b) => b-a);
        if(i>=k){
            ranks.pop();
        }
        result.push(ranks.at(-1));
    }
    
    return result;
}