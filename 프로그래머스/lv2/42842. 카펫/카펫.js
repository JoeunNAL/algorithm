function solution(brown, yellow) {
    const sum = brown + yellow;
    let short = Math.floor(Math.sqrt(sum));
    
    while(short > 3){
        const long = sum/short;
        if(sum%short === 0 && (long-2)*(short-2) === yellow){
            return [long, short];
        } else {
            short--;
        }
    };
    return [sum/3, 3];
}
