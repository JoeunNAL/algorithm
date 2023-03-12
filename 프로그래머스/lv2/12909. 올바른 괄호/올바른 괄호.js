function solution(s){
    const length = s.length;
    const arr = s.split('');
    const openCount = arr.filter(el => el === '(').length;
    const closeCount = length-openCount;
    
    if(openCount !== closeCount){
        return false;
    }
    
    let isOpen = false;
    let repeatCount = 0;
    
    for(let i = 0; i<length; i++){
        const el = s[i];
        
        if(el ==='('){
            if(isOpen){
                repeatCount++;
            }
            isOpen = true;
        } else {
            if(isOpen === true){
                if(repeatCount > 0) {
                    repeatCount--;
                } else {
                    isOpen = false;
                }
            } else {
                return false;
            }
        }
    }
    return repeatCount === 0 && !isOpen
}