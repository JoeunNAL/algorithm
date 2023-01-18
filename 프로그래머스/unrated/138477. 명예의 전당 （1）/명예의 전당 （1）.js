function solution(k, score) {
    const result =[];
    let ranks = [];
    for(let i =0; i<score.length; i++){
        ranks.push(score[i]);
        ranks = ranks.sort((a,b)=>b-a);
        if(i>=k){
            ranks = ranks.slice(0,k);
        }
        result.push(ranks.at(-1));
    }
    return result;
}