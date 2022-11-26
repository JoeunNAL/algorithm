function solution(sides) {  
    const [longSide, shortSide1, shortSide2] = sides.sort((a,b)=>b-a);
    return longSide< (shortSide1+shortSide2)? 1: 2
    
}