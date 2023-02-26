function solution(s) {
    let result='';
    const length = s.length
    
    for(let i = 0; i < length; i++){
        const current = s[i];
        
        if(current === ' '){
            result += current;
        } else if(i === 0 || s[i-1] === ' '){
            result += current.toUpperCase();
        } else{
            result += current.toLowerCase();        
        };
    };
    return result;
}