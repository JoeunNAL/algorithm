function solution(n, arr1, arr2) {
    return arr1.map((el, idx)=>{
        const binaryString = (el|arr2[idx]).toString(2).padStart(n,'0');
        return binaryString.replaceAll(/1|0/g, a => {
            return Number(a) ? '#': ' ';
        });
    })
}