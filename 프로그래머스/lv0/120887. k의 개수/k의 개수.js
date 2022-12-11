function solution(i, j, k) {
    const regex = new RegExp(`[^${k}]`,'g')
    const allNumbersString = new Array(j-i+1).fill(i).map((el, idx)=>el+idx).join('')
    return allNumbersString.replaceAll(regex,"").length;
}