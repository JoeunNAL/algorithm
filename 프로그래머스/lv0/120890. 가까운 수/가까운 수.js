function solution(array, n) {
    return array.sort((a,b)=> a-b).reduce((acc, cur)=> Math.abs(acc-n) <= Math.abs(cur-n) ? acc : cur)
    
//     array.push(n)
//     const sortArr = array.sort((a,b)=>a-b)
//     const nIndex = sortArr.indexOf(n)
//     const lowerGap = Math.abs(sortArr[nIndex-1]-n)
//     const upperGap = Math.abs(sortArr[nIndex+1]-n)
    
//     return lowerGap > upperGap ? sortArr[nIndex+1] : sortArr[nIndex-1]
}