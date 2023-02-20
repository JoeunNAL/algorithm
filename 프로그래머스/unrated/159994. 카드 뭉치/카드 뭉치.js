function solution(cards1, cards2, goal) {
    let result = "Yes";
    
    cards1.reverse();
    cards2.reverse();
    
    goal.forEach((el,idx)=>{
        if(cards1.at(-1) === el){
            cards1.pop();
        } else if( cards2.at(-1) === el){
            cards2.pop();
        } else {
            result = "No";
        }
    });
        
    return result;
}