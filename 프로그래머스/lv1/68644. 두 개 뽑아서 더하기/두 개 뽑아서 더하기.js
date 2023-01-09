function solution(numbers) {
    const set = new Set();
    const length = numbers.length;
    for(let i =0; i<length; i++){
        for(let j = 0; j<length; j++){
            if(j===i) continue;
            set.add(numbers[j]+numbers[i]);
        }
    }
    return [...set].sort((a,b)=>a-b)
}