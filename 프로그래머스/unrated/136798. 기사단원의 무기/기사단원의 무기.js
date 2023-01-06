function getDivisorCount(number){
    let count = 0;
    
    for(let i = 1; i*i <= number; i++){
        if(number%i === 0) count+=2;
        if(i*i === number) count--;
    }
    
    return count;
}

function solution(number, limit, power) {
    let sum = 0;
    
    for(let i = 1; i<= number; i++){
        let count = getDivisorCount(i)
        sum += (count>limit)? power: count;
    }
    
    return sum;
}