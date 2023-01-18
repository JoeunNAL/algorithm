// 시간 비교용
function solution(k, score) {
    const ranks =[];
    return score.reduce((acc,cur) => {
        ranks.push(cur);
        ranks.sort((a,b) => b-a);
        if(ranks.length > k){
            ranks.pop();
        }
        acc.push(ranks.at(-1));
        return acc;
    },[]);
}