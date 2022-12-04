function solution(chicken) {
    let result = 0
    let cupones;
    
    while(parseInt(chicken/10)>0){
        cupones = chicken%10;
        result += parseInt(chicken/10);
        chicken = parseInt(chicken/10)+cupones;    
    }
    
    return result;
}


