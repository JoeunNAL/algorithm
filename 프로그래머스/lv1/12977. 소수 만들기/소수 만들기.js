function solution(nums) {
    const length = nums.length;
    let count = 0;
    for(let i= 0; i < length; i++){
        for(let j= i+1; j < length; j++){
            for(let k= j+1; k < length; k++){
                const sum = nums[i]+nums[j]+nums[k];
                if(checkPrimeNumber(sum)){
                    count++;
                }
            }
        }
    }
    return count;
}

function checkPrimeNumber(num) {
    if(num%2 === 0 || num%3 === 0){
        return false;
    }
    
    let result = true;
    for(let i = 5; i*i<= num; i++){
        if(num%i === 0){
            result = false;
        }
    }
    return result;
}