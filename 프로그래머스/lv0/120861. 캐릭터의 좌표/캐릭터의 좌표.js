function solution(keyinput, board) {
    const [maxX, maxY] = board.map((el)=>parseInt(el/2));
    const directions ={
        up:[0,1],
        down:[0,-1],
        right:[1,0],
        left:[-1,0]
    }
    let x = 0;
    let y = 0;
    keyinput.forEach((directionSign)=>{
        const [moveX, moveY] = directions[directionSign];
        const tempX = x+moveX;
        const tempY = y+moveY;
        if(Math.abs(tempX)<= maxX){
            x = tempX;
        }
        if(Math.abs(tempY)<=maxY){
            y = tempY;
        }
    })
    return [x,y]
}