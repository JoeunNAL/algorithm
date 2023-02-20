function solution(cards1, cards2, goal) {
    const loopCount = goal.length;
    
    cards1.reverse();
    cards2.reverse();
    
    for(let i = 0; i < loopCount; i++){
        const el = goal[i];
        
        if(cards1.at(-1) === el){
            cards1.pop();
        } else if( cards2.at(-1) === el){
            cards2.pop();
        } else {
            return "No"
        }
    }
    
    return "Yes"
}