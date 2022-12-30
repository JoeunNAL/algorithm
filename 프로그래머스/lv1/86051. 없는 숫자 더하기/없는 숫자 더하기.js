function solution(numbers) {
    const allNumbers = numbers.join('');
    const regExp = new RegExp(`[${allNumbers}]`,'g')
    const restNumbers= `0123456789`.replaceAll(regExp,'').split('')
    return restNumbers.reduce((acc,cur)=>acc+Number(cur), 0)
}