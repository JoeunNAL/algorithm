function makeTernaryString(num){
    let number = '';
    let quotient = num;
    while(quotient > 0){
        number = quotient%3 + number;
        quotient = parseInt(quotient/3,10);
    }
    return number;
}

function solution(n) {
    const reverseString = makeTernaryString(n).split('').reverse().join('');
    
    let result = 0;
    const lastIndex = reverseString.length-1;
    
    for(let i = lastIndex ; i >= 0; i--){
        result += reverseString[i]*3**(lastIndex-i);
    }
    
    return result;
}