function solution(s, skip, index) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    const regex = new RegExp(`[${skip}]`,'g');
    const filtering = alphabet.replace(regex,'');
    const length = filtering.length;
    
    return s.split('').reduce((acc,cur)=>{
        const newIndex = (filtering.indexOf(cur)+index)%length;
        return acc+filtering[newIndex];
    },'')
}