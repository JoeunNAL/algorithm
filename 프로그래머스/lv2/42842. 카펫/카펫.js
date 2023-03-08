function solution(brown, yellow) {
    const sum = brown + yellow;
    let short = 3;
    
    for(let i = short; i*i<= sum; i++){
        const isFillYellow = (i-2)*((sum/i)-2) === yellow;
        if(isFillYellow){
            short = i;
            break;
        }
    }
    
    return [sum/short, short];
}
