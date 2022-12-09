function solution(num, total) {
    const middleNum = parseInt(total/num);
    const startNum = middleNum-parseInt(num/2);
    
    return new Array(num).fill(startNum).map((el, idx)=>{
       return (num%2 ===0)?el+idx+1:el+idx;
    })
}