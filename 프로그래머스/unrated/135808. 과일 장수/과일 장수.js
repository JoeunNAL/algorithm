function solution(k, m, score) {
    let sum =0;
    const alignScores = score.sort((a,b)=>b-a);
    
    for(let i = 0; i+m <= alignScores.length; i+=m){
        sum+= alignScores[i+m-1]*m
    }
    
    return sum;
}