function solution(N, stages) {
    const result = [];

    for(let i = 1; i <= N; i++){
        const arrivalCount = stages.filter(el=> el >= i).length;
        const stayCount = stages.filter(el=> el === i).length;
        const rate = arrivalCount === 0 ? 0: stayCount/arrivalCount;
        result[i-1] = [i, rate];
    }

    result.sort((a,b) => {
        if(b[1] === a[1]){
            return a[0] - b[0]
        } else{
            return b[1] - a[1]
        }
    });

    return result.map(([stage, _])=> stage);
}