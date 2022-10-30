function solution(score) {
    const numbering = {};
    score.map((el)=>(el[0]+el[1])/2)
         .sort((a,b)=>b-a)
         .forEach((el,idx)=>
                       (!numbering[el])? numbering[el] = idx+1: null
         )
    return score.map((el)=>{
        return numbering[(el[0]+el[1])/2]
    })
}