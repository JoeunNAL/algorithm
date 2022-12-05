function solution(numbers) {
    const sortNumList = numbers.sort((a,b)=>b-a)
    const sample1 = sortNumList[0]*sortNumList[1];
    const sample2 = sortNumList.at(-1)* sortNumList.at(-2)
    return Math.max(sample1, sample2)
}