function solution(array) {
    const map = new Map();
    array.forEach((el)=>{
        map.set(el, (map.get(el)|| 0)+1);
    })
    const maxAlign = [...map].sort((a,b)=>b[1]-a[1]);
    return (maxAlign.length ===1 || maxAlign[0][1]!==maxAlign[1][1])? maxAlign[0][0]: -1;

}