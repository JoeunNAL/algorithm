function solution(answers) {
    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2,1,2,3,2,4,2,5];
    const pattern3 = [3,3,1,1,2,2,4,4,5,5];
    const scores = [0,0,0];
    
    answers.forEach((el,idx) =>{
        if(el === pattern1[idx%5]) scores[0]++;
        if(el === pattern2[idx%8]) scores[1]++;
        if(el === pattern3[idx%10]) scores[2]++;
    })
    
    const max = Math.max(...scores);
    
    return scores.reduce((acc,cur,idx)=> {
        return (max === cur)? [ ...acc, idx+1 ] : acc;
    },[]);
}