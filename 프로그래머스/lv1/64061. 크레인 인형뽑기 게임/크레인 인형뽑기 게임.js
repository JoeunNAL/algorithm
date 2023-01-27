function solution(board, moves) {
    const stack = [];
    let result = 0;
    
    for(let i = 0; i< moves.length; i++){
        const targetColumnIndex = moves[i]-1;
        
        for(let j = 0; j< board.length; j++){
            const doll = board[j][targetColumnIndex];
            
            if(doll === 0) continue;
            
            if(doll === stack.at(-1)) {
                stack.pop();
                result ++;
            } else {
                stack.push(doll);
            };
            board[j][targetColumnIndex] = 0;
            break;
        }
    }
    return result*2;
}
