function solution(dots) {    
    const sides = {};
    const pointer = dots.pop();
    dots.forEach(el=>{
        el[0] === pointer[0]? 
            sides.x = Math.abs(el[1]-pointer[1]):
            sides.y = Math.abs(el[0]-pointer[0]);
    })
    return sides.x*sides.y
}