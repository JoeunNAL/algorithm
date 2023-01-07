function solution(quiz) {
    return quiz.map((el)=>{
        const [left, right] = el.split(' = ');
        const leftElements = left.split(' ')
        const leftResult = (leftElements[1] === '+')? 
            Number(leftElements[0]) + Number(leftElements[2]):
            Number(leftElements[0]) - Number(leftElements[2]);
        return leftResult === Number(right) ? 'O' : 'X'
    })    
}