function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    ingredient.forEach((el)=>{
        if(el === 1 
           && stack.at(-1) === 3
           && stack.at(-2) === 2
           && stack.at(-3) === 1
          ){
            const stackLength = stack.length;
            stack.pop();
            stack.pop();
            stack.pop();
            // stack = stack.slice(0, stackLength-3);
            count += 1;
        } else{
            stack.push(el);
        }
    })
    return count;
}