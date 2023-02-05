function solution(survey, choices) {
    const scores ={
        R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0,
    };
    const categorys = ['RT', 'CF', 'JM', 'AN']; // 비교대상 알파벳순 배치
    
    choices.forEach((choice,idx)=>{
        const [firstChar, secondChar] = survey[idx];    
        scores[ choice < 4 ? firstChar : secondChar ] += Math.abs(choice-4);
    });
    
    return categorys.reduce((acc,cur)=>{
        const [firstChar, secondChar] = cur;
        return acc + (scores[firstChar] >= scores[secondChar] ? firstChar : secondChar);
    },'')
}