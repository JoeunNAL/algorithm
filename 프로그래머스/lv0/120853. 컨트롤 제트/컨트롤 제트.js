function solution(s) {
    return s.split(" ").reduce((acc, cur, idx, arr)=>{
        return !isNaN(+cur)? acc+Number(cur): acc-Number(arr[idx-1])
    }, 0)
}