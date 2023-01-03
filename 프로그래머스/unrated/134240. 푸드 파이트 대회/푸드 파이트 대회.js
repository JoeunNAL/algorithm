function solution(food) {
    const charLists = food.map((el, idx)=>`${idx}`.repeat(Math.abs(el/2)))
    return charLists.join('')+0+charLists.reverse().join('')
}