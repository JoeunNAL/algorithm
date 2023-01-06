function solution(number, limit, power) {
    const divisorCount = new Array(number).fill(1).map((el,idx)=> {
        const currentElement = el+idx;
        const counters = [];
        
        for(let i = 1; i<=Math.sqrt(currentElement); i++){
            if(currentElement%i === 0) {
                counters.push(i);
                if(currentElement/i !== i)counters.push(currentElement/i);
            }
        }
        return counters.length
    });
    
    const sum = divisorCount.reduce((acc,cur)=>{
        const currentElement = cur > limit ? power: cur;
        return acc+currentElement
    },0)
    
    return sum;
}