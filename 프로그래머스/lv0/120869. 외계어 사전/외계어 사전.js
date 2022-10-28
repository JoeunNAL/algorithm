function solution(spell, dic) {
    const alignSpell = spell.sort().join('')
    for(const text of dic){
        const alignedText = text.split('').sort().join('');
        if(alignedText === alignSpell){
            return 1;
        }
    }
    return 2
    
    
    
    
}