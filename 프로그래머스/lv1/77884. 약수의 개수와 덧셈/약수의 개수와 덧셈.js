function getDividorCount(number){
    let count = 0;
    for(let i =1; i*i<= number; i++){
        if(i*i === number) {
            count++;
            continue;
        } else if(number%i === 0) {
            count+=2;
        }
    }
    return count;
}

function solution(left, right) {
    let sum = 0;
    for(let i = left; i<=right; i++){
        sum += (getDividorCount(i)%2 === 0)? i : -i;
    }
    return sum;
}