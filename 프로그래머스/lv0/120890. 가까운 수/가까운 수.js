function solution(array, n) {
    array.push(n)
    const sortArr = array.sort((a,b)=>a-b)
    const nIndex = sortArr.indexOf(n)
    const lowerGap = Math.abs(sortArr[nIndex-1]-n)
    const upperGap = Math.abs(sortArr[nIndex+1]-n)
    
    return lowerGap > upperGap ? sortArr[nIndex+1] : sortArr[nIndex-1]
}