function solution(age) {
    const subCharNumber = ['a','b','c','d','e','f','g','h','i','j']
    return `${age}`.split('').map((el)=> subCharNumber[+el]).join('')
}