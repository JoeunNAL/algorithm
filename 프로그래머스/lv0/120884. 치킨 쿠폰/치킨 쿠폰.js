function solution(chicken) {
    let result = 0
    let cupones, freeChicken;
    
    while(parseInt(chicken/10)>0){
        freeChicken = parseInt(chicken/10);
        cupones = chicken%10;
        result += freeChicken;
        chicken = freeChicken+cupones;    
    }
    
    return result;
}


