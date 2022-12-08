function solution(s1, s2) {    
    let count =0;
    s1.forEach((el)=>{
        s2.indexOf(el)>-1? count++: null;
    })
    return count
}