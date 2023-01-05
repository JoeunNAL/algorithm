function solution(age) {
    const subCharNumber = 'abcdefghij'
    return `${age}`.split('').map((el)=> subCharNumber[+el]).join('')
}