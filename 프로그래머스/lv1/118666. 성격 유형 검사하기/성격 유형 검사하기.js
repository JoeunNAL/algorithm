function solution(survey, choices) {
    const scores ={
        R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0,
    };
    const categorys = ['RT', 'CF', 'JM', 'AN'];
    
    survey.forEach((el,idx)=>{
        const firstChar = el[0];    
        const secondChar = el[1]; 
        const choice = choices[idx];
        scores[ choice < 4 ? firstChar : secondChar ] += Math.abs(choice-4);
    });
    
    return categorys.reduce((acc,cur)=>{
        const [firstChar, secondChar] = cur.split('').sort();
        const win = scores[firstChar] >= scores[secondChar] ? 
                     firstChar : secondChar; 
        return acc + win;
    },'')
}