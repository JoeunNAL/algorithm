function solution(my_string, num1, num2) {
    const charArr = my_string.split('');
    const fstChar = charArr[num1];
    charArr[num1] = charArr[num2];
    charArr[num2] = fstChar;
    
    return charArr.join('');
}