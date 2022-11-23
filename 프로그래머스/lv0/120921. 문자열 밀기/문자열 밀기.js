function solution(A, B) {
    let result = -1;
    const stringPusher = (num)=>A.slice(-num)+A.slice(0,-num)
    for(let i = 0; i< A.length; i++){
        const newString = stringPusher(i);
        newString === B ? result=i: null;
    }
    return result;
}