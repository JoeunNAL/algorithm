function solution(before, after) {
        const alignBefore = before.split('').sort().join('')
        const alignAfter = after.split('').sort().join('')
        return alignBefore === alignAfter? 1:0;            
}