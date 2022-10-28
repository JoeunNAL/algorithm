function solution(spell, dic) {
    const alignSpell = spell.sort().join('')
    const filteredArr = dic.filter((el)=>
        el.length === alignSpell.length
    )
    
    for(const text of filteredArr){
        const alignedText = text.split('').sort().join('');
        if(alignedText === alignSpell){
            return 1;
        }
    }
    return 2
    
    
    
    
}