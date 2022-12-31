function solution(k, m, score) {
    let sum =0;
    const alignScores = score.sort((a,b)=>b-a);
    
    for(let i = 0; i+m <= alignScores.length; i+=m){
        sum+= alignScores.slice(i, i+m).at(-1)*m
    }
    // while(alignScores.length>=m){
    //     const newBox = alignScores.splice(0,m);
    //     sum += newBox.at(-1)*m
    // }
    
    return sum;
}