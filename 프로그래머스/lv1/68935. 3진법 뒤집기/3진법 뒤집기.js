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
    return parseInt(reverseString,3)
}