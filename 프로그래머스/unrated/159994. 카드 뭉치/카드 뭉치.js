function solution(cards1, cards2, goal) {
    // 시간 비교용 풀이
    let result = "Yes";
    
    goal.forEach((el,idx)=>{
        if(cards1[0] === el){
            cards1.shift();
        } else if( cards2[0] === el){
            cards2.shift();
        } else {
            result = "No";
        }
    });
        
    return result;
}