function solution(s) {
    const charCount ={}
    for(const char of s){
        charCount[char]? charCount[char]++: charCount[char] = 1;
    }
    const repeatOnceChar = Object.keys(charCount).filter(key=>charCount[key] ===1)
    return repeatOnceChar.sort().join('');
}