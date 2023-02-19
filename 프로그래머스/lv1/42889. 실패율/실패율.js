function solution(N, stages) {
    const result = [];
    
    for(let i = 0; i < N; i++){
        const playerReached = stages.filter(el=> el>=i+1 ).length;
        const playerInStage = stages.filter(el=> el===i+1 ).length;
        result[i] = [i+1, playerInStage/playerReached];
    }
    
    result.sort((a,b) => {
        if(b[1] === a[1]){
            return a[0] - b[0]
        } else{
            return b[1] - a[1]
        }
    });
    
    return result.map(([stage, rate])=> stage);
}