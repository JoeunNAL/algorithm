function solution(numbers, k) {
    const length = numbers.length
    let count = 1;
    let index = 1;
    while(count < k){
        index = (index+2)%length         
        count++;
    }
    return index;
}