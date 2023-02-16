function solution(arr1, arr2) {
    return arr1.map((el, idx)=>
        el.map((el,elIdx)=> el+arr2[idx][elIdx])
    )
}