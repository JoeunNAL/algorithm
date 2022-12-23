function solution(hp) {
    let result =0;
    let restHP = hp;
    
    [5,3,1].forEach((el)=>{
        result += parseInt(restHP/el);
        restHP = restHP%el;
    })
    return result 
}