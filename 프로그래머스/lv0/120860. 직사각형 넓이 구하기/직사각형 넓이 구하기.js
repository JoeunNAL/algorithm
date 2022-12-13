function solution(dots) { 
    const xPointers = dots.map(el=>el[0])
    const yPointers = dots.map(el=>el[1])
    return (Math.max(...xPointers)-Math.min(...xPointers))* (Math.max(...yPointers)-Math.min(...yPointers))
    
    // const sides = {};
    // const pointer = dots.pop();
    // dots.forEach(el=>{
    //     el[0] === pointer[0]? 
    //         sides.x = Math.abs(el[1]-pointer[1]):
    //         sides.y = Math.abs(el[0]-pointer[0]);
    // })
    // return sides.x*sides.y
}