function solution(num, total) {
    const fillWithStartNumber = new Array(num).fill(parseInt(total/num)-parseInt(num/2))
    return fillWithStartNumber.map((el, idx)=>{
       return (num%2 ===0)?el+idx+1:el+idx;
    })
}